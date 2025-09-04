import React, { useEffect, useState } from "react";
import { FAQ } from "./FAQ";
import faq from "./faq.json";

export const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);
  console.log(activeId);

  useEffect(() => {
    setData(faq);
  }, []);

  const handleToggle = (id)=>{
    setActiveId((prev)=> (prev===id) ? false : id );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-700 via-gray-800 to-blue-900">
      <ul className="w-full max-w-3xl mx-auto bg-gradient-to-br from-gray-700 via-gray-800 to-blue-900 rounded-2xl p-10 shadow-2xl">
        <h1 className="text-center text-3xl font-bold text-white mb-8">
          FAQ Accordion 
        </h1>
        {data.map((val) => (
          <FAQ 
          key={val.id} 
          data={val} 
          isActive={activeId===val.id}
          onToggle={()=> handleToggle(val.id)}
          />
        ))}
      </ul>
    </div>
  );
};
