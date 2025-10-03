import React from 'react'

export default function PasteInput({code,setCode}) {
    

    return (
        <>
            <label className='block mb-2 font-medium text-gray-400'> Paste your Code HERE</label>
                <textarea 
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-64 p-4 border rounded-lg bg-gray-700 text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-300 shadow-lg"
                    placeholder="Enter your code here...">
                </textarea> 
        </>
    )
}
