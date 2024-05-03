
import './App.css';
import logo from './Images/logo.png';
import Player from './components/Player';
import Game_board from './components/Game_board';
import { useState } from 'react';

function App() {

   let[player1, setPlayer1] = useState("Player1");
   let[player2, setPlayer2] = useState("Player2");
   

  return (
    <div>
  
   <h1 className='Game-Heading'>Tic Tac Toe </h1> 

   <div className='img-conatiner'>
    <img src={logo} height='80px' width='80px'></img>
   </div>


   <div className='Main-section'>
      
      <div className='Game-container'>
      <div className='player-section'>
                        <Player name="Player1"  setPlayer = {setPlayer1} />
                        <Player name="Player2" setPlayer = {setPlayer2} />
      </div>

     <div className='game-section'>
        <Game_board player1 = {player1} player2 = {player2} />

     </div>

      </div>

   </div>

   </div>  );
}

export default App;
