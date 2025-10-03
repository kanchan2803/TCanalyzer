import React from "react";

const HistoryDetail = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Analysis Details</h2>
        <span className="text-sm text-gray-500">
          {new Date(item.createdAt).toLocaleString()}
        </span>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-700">Language</h4>
        <p className="text-gray-800">{item.language}</p>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-700">Code</h4>
        <pre className="bg-gray-100 text-sm rounded-md p-3 overflow-x-auto max-h-64">
          {item.code}
        </pre>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-gray-700">Time Complexity</h4>
          <p className="text-gray-800">{item.timeComplexity}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">Space Complexity</h4>
          <p className="text-gray-800">{item.spaceComplexity}</p>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-700">Reasoning</h4>
        <p className="text-gray-800">{item.reasoning}</p>
      </div>
    </div>
  );
};

export default HistoryDetail;
