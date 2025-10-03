import React from "react";

const HistoryList = ({ history, onSelect }) => {
  return (
    <div className="space-y-3">
      {history.map((item) => (
        <div
          key={item._id}
          onClick={() => onSelect(item)}
          className="p-4 bg-gray-800 rounded-lg shadow cursor-pointer hover:bg-gray-700 transition-colors"
        >
          <div className="flex justify-between items-center">
            <span className="font-medium text-purple-400">{item.language}</span>
            <span className="text-xs text-gray-400">
              {new Date(item.createdAt).toLocaleDateString()}
            </span>
          </div>
          <pre className="mt-2 text-xs text-gray-300 truncate max-h-12">
            {item.code}
          </pre>
          <p className="text-sm text-gray-400 mt-1">
            ⏱ {item.timeComplexity} | 💾 {item.spaceComplexity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;
