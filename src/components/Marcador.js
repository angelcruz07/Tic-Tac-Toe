import React from "react";
import Contador from "./Contador";

const Marcador = ({ status }) => {
  return (
    <div className="row bg-secondary borderInside ">
      <div className="d-flex flex-wrap justify-content-around align-items-center">
        <Contador>{status}</Contador>GIT AD
      </div>
    </div>
  );
};

export default Marcador;
