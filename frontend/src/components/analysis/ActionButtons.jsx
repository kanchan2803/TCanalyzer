import React from 'react'

export default function ActionButtons({handleAnalyze, handleReset}) {
    

    return (
        <div className='flex gap-4'>
            <button 
            onClick={handleAnalyze} 
            className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 font-medium text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Analyze
          </button>
          <button 
            onClick={handleReset} 
            className="flex-1 px-4 py-2 bg-gray-600 font-medium text-white rounded-lg hover:bg-gray-500 transition-colors"
          >
            Reset
          </button>
        </div>
    )
}
