import React from "react";

const DocumentExchange = () => {
  return (
    <div className="flex flex-col items-center space-y-8 mt-10">
      {/* Folders */}
      <div className="flex justify-between w-64 relative">
        {/* Left Folder */}
        <div className="w-20 h-16 bg-yellow-400 rounded-t-md relative flex items-end justify-center">
          <div className="w-16 h-2 bg-yellow-600 rounded-t-md absolute top-0"></div>
          <span className="absolute bottom-1 text-sm font-bold text-gray-800">Folder A</span>
        </div>

        {/* Right Folder */}
        <div className="w-20 h-16 bg-green-400 rounded-t-md relative flex items-end justify-center">
          <div className="w-16 h-2 bg-green-600 rounded-t-md absolute top-0"></div>
          <span className="absolute bottom-1 text-sm font-bold text-gray-800">Folder B</span>
        </div>
      </div>

      {/* Documents flying between folders */}
      <div className="relative w-64 h-32">
        {/* Left to Right */}
        <div className="w-10 h-12 bg-white border border-gray-300 rounded absolute top-4 left-0 animate-leftToRight shadow-md"></div>
        {/* Right to Left */}
        <div className="w-10 h-12 bg-white border border-gray-300 rounded absolute top-16 right-0 animate-rightToLeft shadow-md"></div>
      </div>
    </div>
  );
};

export default DocumentExchange;
