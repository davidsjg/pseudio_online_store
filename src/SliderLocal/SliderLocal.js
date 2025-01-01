import React from "react";
import "./SliderLocal.css";

function SliderLocal({ image }) {
  return (
    <>
      <div className="banImage">
        <img src={image} className="banImage" alt="" />
      </div>
    </>
  );
}

export default SliderLocal;
