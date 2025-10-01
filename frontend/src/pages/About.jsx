import React from "react";

export default function About() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          About Time Complexity Analyzer
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Time Complexity Analyzer is a developer-focused tool that helps you
          understand the efficiency of your code by analyzing its time and space
          complexity. It’s designed to make learning algorithms and data
          structures easier by giving you instant feedback on how your code
          performs.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
          ✨ Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Supports multiple programming languages</li>
          <li>Analyzes time and space complexity of code snippets</li>
          <li>Provides clean and beginner-friendly explanations</li>
          <li>Helps developers debug inefficient logic</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
          🛠️ Tech Stack
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This project is built with a <strong>React</strong> frontend and a{" "}
          <strong>Node.js/Express</strong> backend, with code analysis powered
          by custom logic and APIs.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
          🚀 Our Goal
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The aim of this project is to make algorithm learning and practice
          more interactive and insightful. Whether you’re a beginner exploring
          Big-O notation or an experienced coder optimizing solutions, Time
          Complexity Analyzer can help you grow as a problem solver.
        </p>
      </div>
    </div>
  );
}
