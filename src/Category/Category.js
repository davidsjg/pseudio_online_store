import React from "react";
import "./Category.css";

function Category({ value, onUpdateState }) {
  let category = value.category;
  let image = value.image;

  const handleClick = (e) => {
    switch (e.target.id) {
      case "0":
        onUpdateState(`all products`);
        break;
      case "1":
        onUpdateState(`men's clothing`);
        break;
      case "2":
        onUpdateState(`jewelry`);
        break;
      case "3":
        onUpdateState(`electronics`);
        break;
      case "4":
        onUpdateState(`women's clothing`);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="categoryContain2">
        <img
          className="categoryImage2"
          src={image}
          onClick={handleClick}
          id={value.id}
          alt=""
        />
        <div className="categoryText">{category}</div>
      </div>
    </>
  );
}

export default Category;
