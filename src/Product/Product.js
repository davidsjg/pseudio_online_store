import React from "react";
import "./Product.css";

function Product(props) {
  let product = props.value;


  return (
    <>
      <div className="product">
        <img className="image1" src={product.image} alt={product.title} />
        <div className="productCat2">{product.category}</div>

        <div className="productTitle">
          {product.title}
        </div>
        <div className="productRating">
          Rating: {product.rating.rate}
        </div>

        <div className="productPrice">${product.price}</div>
      </div>
    </>
  );
}

export default Product;
