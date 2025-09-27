import React, { useState } from 'react'
import { analyzeCode } from '../../api/api';

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
            <select 
                value={language}
                onChange = {(e) => setLanguage(e.target.value)}
                className="w-full p-2 border rounded mb-4"
            >
                <option value="">Select Language</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="cpp">C++</option>
                <option value="java">Java</option>
            </select>
            <label className='block mb-2 font-medium'> Paste your Code HERE</label>
                <textarea 
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-64 p-2 border rounded"
                    placeholder="Enter your code here...">
                </textarea> 
          </div>
          <button 
            onClick={handleAnalyze} 
            className="mt-4 px-4 py-2 text-emerald-400 rounded hover:bg-blue-600"
          >
            Analyze
          </button>
          <button 
            onClick={handleReset} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Reset
          </button>


          {/* results */}
            <div className="mt-6">
              <h4 className='text-lg font-semibold mb-2'>Analysis Result:</h4>
              { (typeof result === 'string') ? (
                  <pre className="whitespace-pre-wrap border p-2 rounded bg-gray-50">
                    {result}
                  </pre>
                ) : (
                    // extract the exact property names as passed in server.js
                <div className="border p-4 rounded bg-gray-50 space-y-2">
                    <p><span className='font-semibold'>Time Complexity:</span>{result.timeComplexity}</p>
                    <p><span className='font-semibold'>Space Complexity:</span>{result.spaceComplexity}</p>
                    <div>
                        <span className='font-semibold'>Reasoning:</span>
                        <pre className="whitespace-pre-wrap bg-white border p-2 rounded mt-1">
                            {result.reasoning}
                        </pre>
                    </div>
                </div>
                )
              }
            </div>
        </div>
    )
}
