import React from "react";
import DetaCut from "./details-cut";
import "../styles/pages.css"


let arr = [
  {
    id: 1,
    title: "i phone 12",
    descri: "Made in US",
    isAvailable: true,
     prize:"63,999"
  },
  {
    id: 2,
    title: "POCO M2 Pro",
    descri: "Made in China",
    isAvailable: false,
    prize:"14,999"
  },
  {
    id: 3,
    title: "Galaxy S23 Ultra",
    descri: "Made in US",
    isAvailable: true,
    prize:"1,24,999"
  },
];
   






function Details() {


  return (
    <div className=" deta-main">

      
<div className="deta-header">
        <h2 className="details-header">Details</h2>
      </div>
     {
      arr.map((obj)=>{
             return    <DetaCut  title={obj.title}  descri={obj.descri} prize={obj.prize} />

      })
     }
    </div>
  );
}

export default Details;


