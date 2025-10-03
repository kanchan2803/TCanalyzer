import React from "react";

const EmptyHistory = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h3 className="text-xl font-semibold text-gray-400">
        No analysis history yet
      </h3>
      <p className="text-gray-500 mt-2">
        Run some code analysis to see your results here.
      </p>
    </div>
  );
};

export default EmptyHistory;
