import React from 'react'

export default function ActionButtons({handleAnalyze, handleReset}) {
    

    return (
        <>
            <button 
            onClick={handleAnalyze} 
            className="mt-4 px-4 py-2 bg-pink-500 font-medium text-white rounded hover:bg-pink-400 hover:text-teal-600"
          >
            Analyze
          </button>
          <button 
            onClick={handleReset} 
            className="mt-4 px-4 py-2 bg-pink-500 font-medium text-white rounded hover:bg-pink-400 hover:text-yellow-700"
          >
            Reset
          </button>
        </>
    )
}
