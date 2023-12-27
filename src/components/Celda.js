import React from "react";

const Celda = ({ value, onSquareClick }) => {

  return (
    <div className="col my-0  mr-0 p-0 text-center">
      <button
        className="border m-1 p-0 border-2 border-dark-subtle fs-2 fw-bold  "
        style={{ minWidth: 80, minHeight: 80, color: "#FE9796" }}
        onClick={onSquareClick}
      >
        {value}
      </button>
    </div>
  );
};

export default Celda;
