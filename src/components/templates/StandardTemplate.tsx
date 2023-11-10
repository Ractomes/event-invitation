import React from "react";

const StandardTemplate = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-screen h-screen py-10 px-10">{children}</div>;
};

export default StandardTemplate;
