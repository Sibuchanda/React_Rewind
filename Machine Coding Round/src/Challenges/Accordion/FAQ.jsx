import React, { useState } from "react";

export const FAQ = ({ data, onToggle, isActive }) => {
  const { question, answer } = data;
  
  return (
    <li className="bg-white shadow-md rounded-xl p-6 mb-6 hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-3">
        <p className="text-lg font-semibold text-gray-800">{question}</p>
        <button onClick={onToggle} className={`text-sm font-medium text-white ${ isActive ? "bg-red-600 hover:bg-red-600" : "bg-green-600 hover:bg-green-700 " } px-4 py-1 rounded-lg transition cursor-pointer`}>
          { isActive ? "Close" : "Show"}
        </button>
      </div>
      <p className="text-gray-600 text-base leading-relaxed">{isActive && answer}</p>
    </li>
  );
};
