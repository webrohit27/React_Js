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
let [winner, setWinner] = useState(false);

  function handleClick(event, row_idx, col_idx){   
   
  if (GameBoard[row_idx][col_idx] == null && winner!=true) {
   
   // updating Gameboard
   let NewGameboard = [...GameBoard];
   NewGameboard[row_idx][col_idx] = turn =='X'? 'X': 'O';
   setGameBoard(NewGameboard);

   // upadating UI
   event.target.innerText= turn;
   
   // Changing turn
   turn=="X"? setTurn('O') : setTurn('X');

   // checking Winner
   checkWinner();

   
  }

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
      // check winner for rows
      for (let i = 0; i < 3; i++) {
         if (GameBoard[i][0] == GameBoard[i][1] && GameBoard[i][1] == GameBoard[i][2] && GameBoard[i][0]!=null) {
            console.log("Winner");
            setWinner(true);
         
      }
   }
      // check winner for column
      for (let j = 0; j < 3; j++) {
         if (GameBoard[0][j] == GameBoard[1][j] && GameBoard[1][j] == GameBoard[2][j] && GameBoard[0][j]!=null) {
            console.log("Winner");
            setWinner(true);
         
      }
   }
      
     // check Winner for diagonal One
       if (GameBoard[0][0] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][2] && GameBoard[0][0]!=null) {
         console.log("Winner");
         setWinner(true);
      }

      // check Winner for diagonal Two
      else if (GameBoard[0][2] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][0] && GameBoard[0][2]!=null) {
         console.log("Winner");
         setWinner(true);
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

export default Game_board;
