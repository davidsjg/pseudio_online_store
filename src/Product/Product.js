import React from "react";
import "./Product.css";

function Product({product}) {

  return (
    <>
      <div className="product">
        <img className="image1" src={product.image} alt={product.title} />
        <div className="productCat2">{product.category}</div>

        <div className="productTitle">
       
          {product.title.substring(0, 75)}...  
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
