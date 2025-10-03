import React from 'react'

export default function ResultCard({ result }) {

    return (
        <>
            { (typeof result === 'string') ? (
                  <pre className="whitespace-pre-wrap border p-4 rounded-lg bg-gray-800 text-white border-gray-700">
                    {result}
                  </pre>
                ) : (
                    // extract the exact property names as passed in server.js
                <div className="border p-4 rounded-lg bg-gray-800 space-y-4 border-gray-700">
                    <p><span className='font-semibold text-purple-400'>Time Complexity:</span>{result.timeComplexity}</p>
                    <p><span className='font-semibold text-purple-400'>Space Complexity:</span>{result.spaceComplexity}</p>
                    <div>
                        <span className='font-semibold text-purple-400'>Reasoning:</span>
                        <pre className="whitespace-pre-wrap bg-gray-900 border border-gray-700 p-2 rounded-lg mt-1 text-white">
                            {result.reasoning}
                        </pre>
                    </div>
                </div>
                )
              }
        </>
    )
}
