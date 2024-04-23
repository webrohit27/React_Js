import React, { useState } from 'react';
import "./Player.css";

let Player = (props) => {
 // Corrected the useState declaration
 let[isEditing, setIsEditing] = useState(false);

    function handleClick() {
        if(isEditing == true) {
            setIsEditing(false);
        }
        else{
            setIsEditing(true);
        }
    }

 // Corrected the return statement to properly return JSX
// isEditing ek useState wala variable hai
    // initially isEditing = "false"
    // click karne par--> handleClick function call hoga --> false ka true kar dega
    // Jaise hi useState wala koi bhi variable ki value change hoti hai toh component wapas render hota hai

 return (
  <div className="Player-container">
        
      <span> X </span>
  
      <button onClick={handleClick}> { isEditing? "Save" : "Edit" } </button>
  </div>
);
}

export default Player;
