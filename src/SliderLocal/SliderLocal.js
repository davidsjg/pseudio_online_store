import React from "react";
import "./SliderLocal.css";

function SliderLocal({ image }) {
  console.log(image)
  return (
    <>
      <img src={image} className="banImage" alt=""/>
    </>
  );
}

export default SliderLocal;
