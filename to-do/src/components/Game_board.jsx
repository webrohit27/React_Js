import { useState } from 'react';
import './Game_board.css';

function Game_Board(){

    let[GameBoard, setGameBoard] = useState([
    //    0     1     2
        [null, null, null],  //0
        [null, null, null],  // 1
        [null, null, null]   // 2
    ]);

    let[turn, setTurn] = useState("X");
    let[symbol, setSymbol] = useState("");
    let[winner, setWinner] = useState(false);
    let[winnerSymbol, setWinnerSymbol] = useState(null); // winnerSymbol✏️
    
    function handleClick(event, row_idx, col_idx){

        if(GameBoard[row_idx][col_idx] == null && winner!=true) {
            
            //updating GameBoard
            let NewGameboard = [...GameBoard];
            NewGameboard[row_idx][col_idx] = (turn=="X")? "X" : "O" ;
            setGameBoard(NewGameboard); 
            
            // Updating UI
            event.target.innerText = turn;
            
            //changing turn
            turn=='X'? setTurn('O') : setTurn('X');

            //checking winner
            checkWinner();
        }
    }

    function checkWinner() {
        // check winner for rows 
        for(let i=0; i<3; i++) {
            if(GameBoard[i][0] == GameBoard[i][1] && GameBoard[i][1] == GameBoard[i][2] && GameBoard[i][0]!=null) {
                console.log("Winner");
                setWinner(true);
                setWinnerSymbol(GameBoard[i][0]);
            }
        }
        //check winner for columns
        for(let j=0; j<3; j++) {
            if(GameBoard[0][j] == GameBoard[1][j] && GameBoard[1][j]==GameBoard[2][j] && GameBoard[0][j]!=null) {
                console.log("Winner");
                setWinner(true);
                setWinnerSymbol(GameBoard[0][j]);
            }
        }

        //check winner for diagonal 1
        if(GameBoard[0][0] == GameBoard[1][1]  &&  GameBoard[1][1] == GameBoard[2][2] && GameBoard[0][0]!=null) {
            console.log("Winner");
            setWinner(true);
            setWinnerSymbol(GameBoard[0][0]);
        }

        //check winner for diagonal 2
        else  if(GameBoard[0][2] == GameBoard[1][1]  &&  GameBoard[1][1] == GameBoard[2][0] && GameBoard[0][2]!=null) {
            console.log("Winner");
            setWinner(true);
            setWinnerSymbol(GameBoard[0][2]);
        }
    }

  
    let winnerName = null;

    if(winner == true) {
        if(winnerSymbol=="X") {
            winnerName = <span id="winner-span"> Winner is Player 1</span>
        }
        else {
            winnerName = <span id="winner-span"> Winner is Player 2</span>
        }
    }


    return(
        <div className='game-board-container'>
            {winnerName}     

            <div className="game-board">   
                {
                    GameBoard.map((row, row_idx)=>{
                        return (
                            <div className='row' key={row_idx}> 
                                {
                                    row.map((element, col_idx)=>{
                                        return <button key={col_idx} onClick={(event)=>{ handleClick(event, row_idx, col_idx)}}> </button>
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>  
        </div>
        
    );
}

export default Game_Board;