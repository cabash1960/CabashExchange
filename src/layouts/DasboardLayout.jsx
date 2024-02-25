import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      <div className="flex-shrink-0">
        <Header>{children}</Header>
      </div>
      <div className="flex flex-grow overflow-hidden">
        <div className="lg:w-1/4 xl:w-1/5">
          <Sidebar>{children}</Sidebar>
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
