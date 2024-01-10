import React from "react";
import '../styles/header.css'


function Header(props){

const{
  Menuselect
}=props

  return (
    <div className="header-div">
    <h2 className="header-title">MY-Project</h2>
    <div className="header-parts">
      <span className="home"  onClick={()=>{ Menuselect('home') }} >Home</span>


      <span className="details" onClick={()=>{ Menuselect('details') }}  >Details</span>

      <span className="settings"  onClick={()=>{ Menuselect('settings') }} >Settings</span>

      <span className="log"     onClick={()=>{ Menuselect('logout') }}      >Log Out</span>
    </div>
  </div>

  )
};


export default Header;