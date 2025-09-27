import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { ChatGroq } from '@langchain/groq';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { JsonOutputParser } from '@langchain/core/output_parsers';

dotenv.config();
const app = express();
const PORT = process.env.PORT ;

//middleware
app.use(cors());
app.use(express.json());

// Setup Groq LLM
const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",  
});

//parser
const parser = new JsonOutputParser();
const formatInstructions = parser.getFormatInstructions();

//prompt template
const prompt = ChatPromptTemplate.fromTemplate(`
You are a code complexity analyzer.

Analyze the following {language} code.
Return ONLY valid JSON with these fields:
  "timeComplexity": "O(...)",
  "spaceComplexity": "O(...)",
  "reasoning": "short explanation"

{format_instructions}

Code:
{code}
`);

const chain = prompt.pipe(model).pipe(parser);

// Safe fallback
function safeParse(result) {
  if (typeof result === "object") return result;
  try {
    const cleaned = result.replace(/```json|```/g, "").trim();
    return JSON.parse(cleaned);
  } catch {
    return {
      timeComplexity: "Not parsed",
      spaceComplexity: "Not parsed",
      reasoning: typeof result === "string" ? result : "Parsing failed",
    };
  }
}

//routes
app.post('/analyze', async (req, res) => {
  const { code, language } = req.body;

  console.log('Code:', code);
  console.log('Language:', language);

  try {
    let result = await chain.invoke({ 
        code, 
        language ,
        format_instructions: formatInstructions,
    });
    result = safeParse(result);
    console.log('Analysis Result:', result);

    res.json({ 
      message: "Code analyzed successfully",
      codeSample: code,
      language,
      ...result
    }); 
  } catch (error) {
    console.error('Error analyzing code:', error);
    res.status(500).json({ 
        message: 'Error analyzing code', 
        error: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
