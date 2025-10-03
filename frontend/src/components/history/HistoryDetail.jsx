import React from "react";

const HistoryDetail = ({ item }) => {
  return (
    <div className="bg-gray-800 shadow-md rounded-xl p-6 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-purple-400">Analysis Details</h2>
        <span className="text-xl font-semibold text-purple-400">
          {new Date(item.createdAt).toLocaleString()}
        </span>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-400">Language</h4>
        <p className="text-gray-200">{item.language}</p>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-400">Code</h4>
        <pre className="bg-gray-900 text-sm rounded-md p-3 overflow-x-auto max-h-64 border border-gray-700">
          {item.code}
        </pre>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-gray-400">Time Complexity</h4>
          <p className="text-gray-200">{item.timeComplexity}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-400">Space Complexity</h4>
          <p className="text-gray-200">{item.spaceComplexity}</p>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-400">Reasoning</h4>
        <p className="text-gray-200">{item.reasoning}</p>
      </div>
    </div>
  );
};

export default HistoryDetail;
