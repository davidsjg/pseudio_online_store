import React from "react";
import "./CategoryDisplay.css";
import Category from "../Category/Category";

function CategoryDisplay(props) {
  let data = props.value;

  return (
    <>
      <div className="categoryContain">
        {data &&
          data.map((item, index) => {
            let myClass = `item item` + item.id;
            let key1 = (index+1) * 5;
            return (
              <div className={myClass} key={key1} >
                <Category value={item} onUpdateState={props.onUpdateState}/>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default CategoryDisplay;
