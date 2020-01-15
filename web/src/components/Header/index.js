import React from "react";
import './styles.css'
import logo from "../../assets/devradar_logo.png";

function Header() {
  return (
    <div className="alignImg">
    <img src={logo} alt="DevRadar"/>
    </div>
  )
}

export default Header;