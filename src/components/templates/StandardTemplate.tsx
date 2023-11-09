import React from "react";

const StandardTemplate = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-screen h-screen bg-[#F7FAFC] p-14">{children}</div>;
};

export default StandardTemplate;
