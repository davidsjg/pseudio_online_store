import React from "react";
import "./LeftHeader.css";
import logo from "./pseudio.png";
import homePic1 from "./Home.png";
import home2 from './Home2.png'
import productPic1 from "./Products.png";
import product2 from './Products2.png'
import discPic from "./Discounts.png";
import discount2 from './Discounts2.png'
import about from "./About.png";
import about2 from './About2.png'
import {useState} from "react"

function Header(props) {
  const [discountPic, setDiscountPic] = useState(discPic);
  const [productPic, setProductPic] = useState(productPic1);
  const [homePic, setHomePic] = useState(homePic1);
  const [aboutPic, setAboutPic] = useState(about);
  let myBool = false;

  const mouseEnter1 = () => {
    setHomePic(home2);

  };

  const mouseLeave1 = () => {
    setHomePic(homePic1);

  };
  const mouseEnter2 = () => {
    setProductPic(product2);

  };

  const mouseLeave2 = () => {
    setProductPic(productPic1);

  };
  const mouseEnter3 = () => {
    setDiscountPic(discount2);

  };

  const mouseLeave3 = () => {
    setDiscountPic(discPic);

  };
  const mouseEnter4 = () => {
    setAboutPic(about2);
  };

  const mouseLeave4 = () => {
    setAboutPic(about);

  };
  return (
    <>
      <div className="mainLeft">
 
          <img className="mlImage" src={logo} alt="" />
  
          <img className="mlImage2 adjPic" src={homePic} alt="" onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1} />
     
          <img className="mlImage2 adjPic2" src={productPic} alt="" onMouseEnter={mouseEnter2} onMouseLeave={mouseLeave2}/>
     
          <img className="mlImage2 adjPic2" src={discountPic} alt="" onMouseEnter={mouseEnter3} onMouseLeave={mouseLeave3}/>
    
          <img className="mlImage2 " src={aboutPic} alt="" onMouseEnter={mouseEnter4} onMouseLeave={mouseLeave4}/>

      </div>
    </>
  );
}

export default Header;
