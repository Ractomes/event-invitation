import React from "react";
import Sidebar from "../organisms/Sidebar";
import Navbar from "../organisms/Navbar";

const StandardTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full justify-between h-screen py-6 px-10 flex flex-row items-start">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="pt-10 pl-4">
        </div>
      </div>

    </div>
  );
};

export default StandardTemplate;
