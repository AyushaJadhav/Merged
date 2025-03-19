import React from "react";

const SprintViewer = ({ children }) => {
  return (
    <div className="border border-black-200 m-3 h-[500px] flex relative">
      {children}
    </div>
  );
};

export default SprintViewer;
