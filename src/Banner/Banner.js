import React from "react";
import "./Banner.css";
import logo from "../Header/LeftHeader/pseudio.png";
import SliderLocal from "../SliderLocal/SliderLocal";
import { useState } from "react";
import deals from './deals.png'

function Banner({ data }) {
  const [imageDisplay, setImageDisplay] = useState(data[0].image);
  const [imageCounter, setImageCounter] = useState(0);

  let picArr = [];
  data.forEach((element) => {
    picArr.push(element.image);
  });

  setTimeout(() => {

    if(imageCounter === 20){
        setImageCounter(0)
        setImageDisplay(picArr[1]);
      } else {
        setImageCounter(imageCounter + 1);
        setImageDisplay(picArr[imageCounter]);
      }

  }, 12000);

  return (
    <>
      <div className="bannerContain1">
        <img src={logo} />
        <SliderLocal image={imageDisplay} />
        <div className="blankBan">
        <img className="currentDeals" src={deals} />
        </div>
      </div>

    </>
  );
}

export default Banner;
