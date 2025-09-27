import React from 'react'

export default function ResultCard({ result }) {

    return (
        <>
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
        </>
    )
}
