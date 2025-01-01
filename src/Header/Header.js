import React from "react";
import "./Header.css";
import LeftHeader from './LeftHeader/LeftHeader'

function Header(props) {

  return (
    <>
      <div className="header">
        <LeftHeader/>
        <div className="centerHeader"></div>
        <div className="rightHeader">right</div>
      </div>
    </>
  );
}

export default Header;
