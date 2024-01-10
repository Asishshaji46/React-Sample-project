import React from "react";
import Button from "./button";


function ListItems(props){

const{
  title,
  descri,
  isAvailable,
  onBtclick,
  onDelete,
}=props


  return(

         
    <div className="body-div">
    <h3 className="body-title">{title}</h3>
    <h3 className="body-descri"   >{descri}</h3>
   <Button   isAvailable={isAvailable} onBtpass={onBtclick} />

    <button className="dlt-button" onClick={onDelete}>Delete</button>
  </div>
  
  )
};

export default ListItems;