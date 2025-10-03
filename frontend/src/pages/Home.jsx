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
      <div className='min-h-screen bg-gray-900 p-6 flex items-center justify-center'>

        <div className='w-full max-w-3xl mx-auto bg-gray-800 text-white rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105'>

          <h1 className='text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse p-4'> 
             Time Complexity Analyzer
          </h1>

         {/* /input */}
          <div className="mb-6">
            <LanguageSelect language={language} setLanguage={setLanguage} />
            <PasteInput code={code} setCode={setCode} /> 
          </div>
        {/* buttons */}
         <ActionButtons handleAnalyze={handleAnalyze} handleReset={handleReset} />


          {/* results */}
            <div className="mt-8">
              <h4 className='text-xl font-semibold mb-4'>Analysis Result:</h4>
              <ResultCard result={result} />
            </div>
        </div>
      </div>
    )
}
