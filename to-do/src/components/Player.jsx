import React, { useState } from 'react';
import "./Player.css";

const Player = (props) => {
 // Corrected the useState declaration
 const [buttonValue, setButtonValue] = useState('Edit');

 function handleClick() {
    console.log('clicked');
    if (buttonValue === "Edit") {
      setButtonValue("Save");
    } else {
      setButtonValue("Edit");
    }
 }

 // Corrected the return statement to properly return JSX
 return (
    <div className='Player-container'>
      <input type="text" value={props.playerName} readOnly />
      <span> X </span>
      <button onClick={handleClick}>{buttonValue}</button>
    </div>
 );
}

export default Player;
