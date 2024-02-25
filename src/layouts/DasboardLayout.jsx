import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col overflow-hidden bg-gray-100">
      <div className="fixed top-0 w-full z-10">
        <Header>{children}</Header>
      </div>
      <div className="flex flex-grow mt-16 overflow-hidden">
        <div className="lg:w-1/4 xl:w-1/5">
          <Sidebar>{children}</Sidebar>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
