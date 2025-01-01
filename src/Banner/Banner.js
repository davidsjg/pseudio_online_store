import React from "react";
import "./Banner.css";
import logo from "../Header/LeftHeader/pseudio.png";
import SliderLocal from "../SliderLocal/SliderLocal";
import { useState } from 'react';


function Banner({data}) {
    //slider local will be an image div
    //need to update what image it displays
    const [imageDisplay, setImageDisplay] = useState(data[0].image);
    let localBool = false;

    let currImage = 0;
    let currIndex = 0;
    let picArr = [];
    data.forEach(element => {
        console.log(element.image)
        picArr.push(element.image);
    });

    firstTimeOut(currIndex);
    console.log(picArr)
    for(let i=0;i< picArr.length; i++){
        let rand = Math.floor(Math.random() * picArr.length-1) + 1;

        setTimeout(() => {
            setImageDisplay(picArr[rand])
          }, 3000); 

    }

    if(localBool === true){
        let rand = Math.floor(Math.random() * picArr.length-1) + 1;
        setImageDisplay(picArr[rand])
        localBool = false;
    }



    function firstTimeOut(index){

    }

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
      <SliderLocal image={imageDisplay}/>
    </>
  );
}

export default Banner;
