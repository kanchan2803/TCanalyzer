import React from "react";

const HistoryList = ({ history, onSelect }) => {
  return (
    <div className="space-y-3">
      {history.map((item) => (
        <div
          key={item._id}
          onClick={() => onSelect(item)}
          className="p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50 transition"
        >
          <div className="flex justify-between items-center">
            <span className="font-medium text-blue-600">{item.language}</span>
            <span className="text-xs text-gray-500">
              {new Date(item.createdAt).toLocaleDateString()}
            </span>
          </div>
          <pre className="mt-2 text-xs text-gray-700 truncate max-h-12">
            {item.code}
          </pre>
          <p className="text-sm text-gray-600 mt-1">
            ⏱ {item.timeComplexity} | 💾 {item.spaceComplexity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;
