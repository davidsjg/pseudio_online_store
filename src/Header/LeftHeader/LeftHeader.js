import React from "react";
import "./LeftHeader.css";
import logo from "./pseudio.png";
import homePic from "./Home.png";
import productPic from "./Products.png";
import discountPic from "./Discounts.png";
import about from "./About.png";

function Header(props) {
  return (
    <>
      <div className="mainLeft">
 
          <img className="mlImage" src={logo} alt="" />
  
          <img className="mlImage2 adjPic" src={homePic} alt="" />
     
          <img className="mlImage2 adjPic2" src={productPic} alt="" />
     
          <img className="mlImage2 adjPic2" src={discountPic} alt="" />
    
          <img className="mlImage2 " src={about} alt="" />
 
      </div>
    </>
  );
}

export default Header;
