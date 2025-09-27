import React from 'react'

export default function PasteInput({code,setCode}) {
    

    return (
        <>
            <label className='block mb-2 font-medium'> Paste your Code HERE</label>
                <textarea 
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-64 p-2 border rounded"
                    placeholder="Enter your code here...">
                </textarea> 
        </>
    )
}
