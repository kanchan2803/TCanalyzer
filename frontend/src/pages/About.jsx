import React from "react";

export default function About() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6 text-white">
      <div className="max-w-3xl w-full bg-gray-800 shadow-lg rounded-2xl p-8 border border-gray-700">
        <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          About Time Complexity Analyzer
        </h1>
        <p className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          Time Complexity Analyzer is a developer-focused tool that helps you
          understand the efficiency of your code by analyzing its time and space
          complexity. It’s designed to make learning algorithms and data
          structures easier by giving you instant feedback on how your code
          performs.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          ✨ Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Supports multiple programming languages</li>
          <li>Analyzes time and space complexity of code snippets</li>
          <li>Provides clean and beginner-friendly explanations</li>
          <li>Helps developers debug inefficient logic</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          🛠️ Tech Stack
        </h2>
        <p className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          This project is built with a <strong>React</strong> frontend and a{" "}
          <strong>Node.js/Express</strong> backend, with code analysis powered
          by custom logic and APIs.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">
          🚀 Our Goal
        </h2>
        <p className="text-gray-300 leading-relaxed">
          The aim of this project is to make algorithm learning and practice
          more interactive and insightful. Whether you’re a beginner exploring
          Big-O notation or an experienced coder optimizing solutions, Time
          Complexity Analyzer can help you grow as a problem solver.
        </p>
      </div>
    </div>
  );
}
