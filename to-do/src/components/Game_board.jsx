import React, { useState } from 'react'
import './Game_board.css';

function Game_board(){
  
let GameBoard = [
   [null, null, null],
   [null, null, null],
   [null, null, null]
];


let [turn, setTurn] = useState("X");
let [symbol, setSymbol] = useState("");

  function handleClick(event, row_idx, col_idx){
   
   GameBoard[row_idx][col_idx] = turn =='X'? 'X': 'O';

   event.target.innerText= turn;
   
   turn=="X"? setTurn('O') : setTurn('X');



   // if (turn =="X") {
   //    event.target.innertText = 'X';
   //    turn = '0';
   // }
   // else{
   //    event.target.innertText = 'O';
   //    turn="X";
   // }
  }


   return (
      <div className='game-board'>
         {
            GameBoard.map((row, row_idx)=>{
               return(
                  <div className='row' key={row_idx} > 
                  {
                     row.map((element, col_idx)=>{
                        return <button key={col_idx} onClick={(event)=> {handleClick(event, row_idx, col_idx)}}></button>
                     })
                  } 
                  </div>
               );
            })
         } 

      </div>


       
  )
}

export default Game_board
