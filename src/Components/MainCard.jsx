import React from "react";

const MainCard = ({ title, icon, color, onClick }) => (
  <div
    className={`border rounded-xl shadow-md p-2 ${color}`}
    onClick={onClick} 
    style={{ cursor: "pointer" }} 
  >
    <div className="flex gap-2 justify-center items-center">
      <span className="text-xl">{icon}</span>
      <p className="font-medium">{title}</p>
    </div>
  </div>
);

export default MainCard;
