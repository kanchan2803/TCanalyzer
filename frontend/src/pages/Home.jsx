import React, { useState } from 'react'
import { analyzeCode, saveHistoryApi } from '../../src/services/api';
import LanguageSelect from '../components/analysis/LanguageSelect';
import PasteInput from '../components/inputs/PasteInput';
import ActionButtons from '../components/analysis/ActionButtons';
import ResultCard from '../components/analysis/ResultCard';
import { useAuth } from '../context/authContext';

export function Home() {

    const [language,setLanguage] = useState("");
    const [code, setCode] = useState("");
    const [result,setResult] = useState("");
    const { isLoggedIn } = useAuth();

    const handleAnalyze = async () => {
        if(!code.trim()) return;
        setResult("Analyzing...");

        try {
            const output = await analyzeCode(code,language);
            setResult(output);
            console.log("analysis result:", output);

            if(isLoggedIn){
              await saveHistoryApi({
                code: code || output.codeSample, // ensure one valid code field
                language,
                timeComplexity: output.timeComplexity,
                spaceComplexity: output.spaceComplexity,
                reasoning: output.reasoning
              })
            }

        } catch (error) {
            setResult("Error: " + error.message);
        }
    }

    const handleReset = () => {
        setLanguage("");
        setCode("");
        setResult("");
    }

    return (
        <div className='p-6 max-w-3xl mx-auto'>

          <h1 className='text-3xl font-bold mb-6 text-center'> 
             Time Complexity Analyzer
          </h1>

         {/* /input */}
          <div className="mb-4">
            <LanguageSelect language={language} setLanguage={setLanguage} />
            <PasteInput code={code} setCode={setCode} /> 
          </div>
        {/* buttons */}
         <ActionButtons handleAnalyze={handleAnalyze} handleReset={handleReset} />


          {/* results */}
            <div className="mt-6">
              <h4 className='text-lg font-semibold mb-2'>Analysis Result:</h4>
              <ResultCard result={result} />
            </div>
        </div>
    )
}
