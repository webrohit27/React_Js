import React, { useState } from 'react';
import "./Player.css";

let Player = (props) => {
 // Corrected the useState declaration
 let[playerName, setPlayerName] = useState(props.name);
 let [isEditing, setIsEditing] = useState(false);


     function handleChange(event) {
      setPlayerName(event.target.value);
     }

    function handleClick() {

        if(isEditing === true) {
            props.setPlayer(playerName);
            setIsEditing(false);
        }
        else{
            setIsEditing(true);
        }
    }

      function handleKey(event){
         if (event.key == "Enter") {
            props.setPlayer(playerName);
            setIsEditing(false);
         }
      }

    let editablePlayerName = <span className='player-name'> {playerName} </span>

    if (isEditing === true) {
      editablePlayerName = 
            <input type='text' 
            required 
            onChange={handleChange}
            value={playerName}
            onKeyDown={handleKey}
            ></input>
    }
  

 // Corrected the return statement to properly return JSX
// isEditing ek useState wala variable hai
    // initially isEditing = "false"
    // click karne par--> handleClick function call hoga --> false ka true kar dega
    // Jaise hi useState wala koi bhi variable ki value change hoti hai toh component wapas render hota hai 

 return (
  <div className="Player-container"> 
     {editablePlayerName}
        
      <span className='symbol'> {props.symbol} </span>
  
      <button onClick={handleClick}> { isEditing? "Save" : "Edit" } </button>
  </div>
);
}

export default Player;
