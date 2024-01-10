import React from "react";
import '../styles/button.css'


function Button(props){



  
const{
    isAvailable,
    onBtpass
}=props

const changePage=onBtpass();

   const style = isAvailable ? {background:"green"} : { background:"red"}
    
   const set = isAvailable ? 'Available' : 'Not-Available'


    return(
        <div>
            <button className="body-button" onClick={ changePage} style={style}>{set} </button>
        </div>
    )
};

export default Button;