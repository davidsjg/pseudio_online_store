import React from "react";
import "./LeftHeader.css";
import logo from './pseudio.png'

function Header(props) {
  return (
    <>
      <div className="mainLeft">
        <div className="mlImage">
          <img src={logo} alt=''/>
        </div>
        <div className="mLContain">
          <span>Home</span>
        </div>
        <div className="mLContain">
          <span>Products</span>
        </div>
        <div className="mLContain">
          <span>Discounts</span>
        </div>
        <div className="mLContain">
          <span>About Us</span>
        </div>
      </div>
    </>
  );
}

export default Header;
