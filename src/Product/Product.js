import React from "react";
import "./Product.css";

function Product(props) {
  let product = props.value;

  return (
    <>

        <div className="product">
          <section className="productTitle">
            <span style={{ fontWeight: "bold" }}>Title: </span> {product.title.substring(0, 25)}...
          </section>
          <section>
            <img className="image1" src={product.image} alt={product.title} />
          </section>
          <section className="productPrice">${product.price}</section>
        </div>

    </>
  );
}

export default Product;
