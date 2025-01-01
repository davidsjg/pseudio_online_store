import React from "react";
import "./Banner.css";
import logo from "../Header/LeftHeader/pseudio.png";
import SliderLocal from "../SliderLocal/SliderLocal";
import { useState } from "react";

function Banner({ data }) {
  //slider local will be an image div
  //need to update what image it displays
  const [imageDisplay, setImageDisplay] = useState(data[0].image);
  const [imageCounter, setImageCounter] = useState(0);
  let localBool = false;

  let currImage = 0;
  let currIndex = 0;
  let picArr = [];
  data.forEach((element) => {
    picArr.push(element.image);
  });

  setTimeout(() => {
    console.log(imageCounter);

    if(imageCounter === 20){
        setImageCounter(0)
        setImageDisplay(picArr[0]);
      } else {
        setImageCounter(imageCounter + 1);
        setImageDisplay(picArr[imageCounter]);
      }

  }, 3000);




  /*
    function secondTimeOut(index){
        setTimeout(() => {
            currImage = picArr[index]
            console.log(currImage)
            currIndex += 1;
            secondTimeOut(currIndex)
            setImageDisplay(currImage)
          }, 3000); 
    }

*/
  return (
    <>
      <div className="bannerContain">
        <img src={logo} />
      </div>
      <SliderLocal image={imageDisplay} />
    </>
  );
}

export default Banner;
