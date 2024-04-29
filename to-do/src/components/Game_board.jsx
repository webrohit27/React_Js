import React, { useState } from 'react'
import './Game_board.css';

function Game_board(){
  
let [GameBoard, setGameBoard] = useState([
      [null, null, null],
      [null, null, null],
      [null, null, null]
   ]
);


let [turn, setTurn] = useState("X");
let [symbol, setSymbol] = useState(""); 

  function handleClick(event, row_idx, col_idx){   
   
   let NewGameboard = [...GameBoard];
   
   NewGameboard[row_idx][col_idx] = turn =='X'? 'X': 'O';

   setGameBoard(NewGameboard);

   console.log(GameBoard);

   event.target.innerText= turn;
   
   turn=="X"? setTurn('O') : setTurn('X');

   checkWinner();


   // if (turn =="X") {
   //    event.target.innertText = 'X';
   //    turn = '0';
   // }
   // else{
   //    event.target.innertText = 'O';
   //    turn="X";
   // }
  }


   function checkWinner() {
      if (GameBoard[0][0] == GameBoard[0][1] && GameBoard[0][1] == GameBoard[0][2] && GameBoard[0][0]!=null) {
         console.log("Winner");
      }
      else if (GameBoard[1][0] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[1][2] && GameBoard[1][0]!=null) {
         console.log("Winner");
      }

      else if (GameBoard[2][0] == GameBoard[2][1] && GameBoard[2][2] == GameBoard[2][2] && GameBoard[2][0]!=null) {
         console.log("Winner");
      }

      else if (GameBoard[0][0] == GameBoard[1][0] && GameBoard[1][0] == GameBoard[2][0] && GameBoard[0][0]!=null) {
         console.log("Winner");
      }

      else if (GameBoard[0][1] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][1] && GameBoard[0][1]!=null) {
         console.log("Winner");
      }

      else if (GameBoard[0][2] == GameBoard[1][2] && GameBoard[1][2] == GameBoard[2][2] && GameBoard[0][2]!=null) {
         console.log("Winner");
      }

      else if (GameBoard[0][0] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][2] && GameBoard[0][0]!=null) {
         console.log("Winner");
      }

      else if (GameBoard[0][2] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][0] && GameBoard[0][2]!=null) {
         console.log("Winner");
      }

      

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
