import React from 'react'

export default function LanguageSelect({language, setLanguage}) {
    
    return (
        <>
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
        </>
    )
}
