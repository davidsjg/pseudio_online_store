import React from "react";
import "./ProductDisplay.css";
import Product from "../Product/Product";

function ProductDisplay(props) {
  let data = props.value;

  return (
    <>
      <div className="mainContain">
        {data &&
          data.map((item) => {
            let myClass = `item item` + item.id;
            return (
              <div className={myClass} key={item.id}>
                <Product value={item} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ProductDisplay;
