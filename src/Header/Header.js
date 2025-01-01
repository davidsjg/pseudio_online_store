import React from "react";
import "./Header.css";
import LeftHeader from './LeftHeader/LeftHeader'
import Searchbar from "../Searchbar/Searchbar";

function Header({onFilterTextChange,filterText}) {

  return (
    <>
      <div className="header">
        <LeftHeader/>
        <div className="centerHeader"></div>
        <div className="rightHeader">     
           <Searchbar filterText={filterText} 
          onFilterTextChange={onFilterTextChange}
       // onFilterTextChange={setFilterText}
         /></div>
      </div>
    </>
  );
}

export default Header;
