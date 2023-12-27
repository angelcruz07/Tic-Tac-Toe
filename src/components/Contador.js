import React from "react";

const Contador = ({ children }) => {
  return (
    <div className="purple  rounded" style={{ height: 40 }}>
      <p className="lcdText text-light m-2 ">{children}</p>
    </div>
  );
};

export default Contador;
