
import './App.css';
import logo from './Images/logo.png';
import Player from './components/Player';
import Game_board from './components/Game_board';

function App() {
  return (
    <div>

  
   <h1 className='Game-Heading'>Tic Tac Toe </h1> 

   <div className='img-conatiner'>
    <img src={logo} height='80px' width='80px'></img>
   </div>


   <div className='Main-section'>
      
      <div className='Game-container'>
      <div className='player-section'>
                        <Player name="Player1" symbol="X"/>
                        <Player name="Player2" symbol="O"/>
      </div>

     <div className='game-section'>
        <Game_board />

     </div>

      </div>

   </div>

   </div>  );
}

export default App;
