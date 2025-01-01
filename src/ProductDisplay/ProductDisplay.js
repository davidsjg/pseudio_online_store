import React from "react";
import "./ProductDisplay.css";
import Product from "../Product/Product";

function ProductDisplay({ data, filterText }) {
  //let data = props.value;

  return (
    <>
      <div className="mainContain">
        {data &&
          data.map((item) => {
            let lastCategory = null;
            let myClass = `item item` + item.id;
            let categoryCheck = item.category
              .toLowerCase()
              .indexOf(filterText.toLowerCase());
            let titleCheck = item.title
              .toLowerCase()
              .indexOf(filterText.toLowerCase());

            if (filterText !== null) {
              if (categoryCheck !== -1 || titleCheck !== -1) {
                console.log("no matches");
              } else {
                return;
              }
            }

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
