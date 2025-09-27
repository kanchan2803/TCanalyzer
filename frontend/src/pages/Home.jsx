import React, { useState } from 'react'
import { analyzeCode } from '../../api/api';
import LanguageSelect from '../components/analysis/LanguageSelect';
import PasteInput from '../components/inputs/PasteInput';
import ActionButtons from '../components/analysis/ActionButtons';
import ResultCard from '../components/analysis/ResultCard';

export function Home() {

    const [language,setLanguage] = useState("");
    const [code, setCode] = useState("");
    const [result,setResult] = useState("");

    const handleAnalyze = async () => {
        if(!code.trim()) return;
        setResult("Analyzing...");

        try {
            const output = await analyzeCode(code,language);
            setResult(output);
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
