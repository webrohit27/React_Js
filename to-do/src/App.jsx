
import './App.css';
import logo from './Images/logo.png';
import Player from './components/Player';

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
               <Player playerName="Player1"/>
               <Player playerName="Player2"/>
         </div>

     <div className='game-section'>

     </div>

      </div>

   </div>

   </div>  );
}

export default App;
