// components/analysis/LanguageSelect.jsx
import React, { useState } from 'react';

const options = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'cpp', label: 'C++' },
  { value: 'java', label: 'Java' },
];

export default function LanguageSelect({ language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setLanguage(value);
    setIsOpen(false);
  };
  
  const selectedLabel = options.find(opt => opt.value === language)?.label || 'Select Language';

  return (
    <div className="relative w-full mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 flex justify-between items-center text-left bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <span>{selectedLabel}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700 overflow-hidden">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="px-4 py-3 cursor-pointer hover:bg-pink-500 transition-colors duration-200"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}