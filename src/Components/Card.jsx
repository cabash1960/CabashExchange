import React from "react";
import {
  FaLock,
  FaHourglass,
  FaGlobe,
  FaProcedures,
  FaMoneyBill,
  FaSwift,
  FaBitcoin, 
  FaMobileAlt, 
  FaCalendarAlt, } 
  from "react-icons/fa";

const icons = {
  audience: <FaGlobe />,
  pricing: <FaMoneyBill />,
  secure: <FaLock />,
  constant: <FaHourglass />,
  process: <FaProcedures />,
  fast: <FaSwift />,
  crypto: <FaBitcoin />,
  mobile: <FaMobileAlt />,
  mangt: <FaCalendarAlt />,
};

const Card = ({ icon, title, content, isColumnLayout }) => {
  const layoutClass = isColumnLayout ? "flex-col" : "flex-row";

  return (
    <div
      className={`bg-slate-800 text-slate-400 shadow-lg rounded-md p-6 mb-4 ${layoutClass}`}
    >
      <div className={`flex items-center mb-3 ${layoutClass}`}>
        <div
          className={`mr-4 text-3xl text-orange-400 ${
            isColumnLayout ? "mb-2" : ""
          }`}
        >
          {icons[icon]}
        </div>
        <h3
          className={`text-lg font-bold text-slate-300 ${
            isColumnLayout ? "text-left" : ""
          }`}
        >
          {title}
        </h3>
      </div>
      <div className="text-slate-400 text-sm leading-6">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
