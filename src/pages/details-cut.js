import React  from "react";
import "../styles/pages.css"


function DetaCut(props){
  

  const{

    title,
    descri,
    prize
  } =props
/*
 const imageurl=require("./images/download (1).jpeg")
 const imageUrl1= require ("./images/download (2).jpeg")
 const imageUrl2=require("./images/download.jpeg")
  
  */

    return(

        <div>
      <div className="deta-body">
        <div className="deta-title-div ">
          <h2 className="deta-title">{title} </h2>
      <h2 className="deta-descri"> {descri} </h2>
        </div>
        <div className="deta-image">
          <div className="image-box">
            <img  src=""  alt="img" />
          </div>
        </div>
        <div className="deta-prize">
          <h2 className="prize-box"> {prize} /- </h2>
        </div>
        <div>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
        </div>
    )
};

export default DetaCut;