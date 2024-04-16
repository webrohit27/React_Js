import Navbar from './components/Navbar';
import './App.css';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Main from "./components/Main";

function App(){

let [name, setName] = useState("Ramesh");

function handleClick(){
   setName('Suresh');
}
  return(

    <div> 
       <Navbar />
      <div className='Sidebar-Main-Container'>

        <Sidebar  fun = {handleClick}/>

        <Main heading = {name}/>
      </div> 
    </div>
  );
}

export default App;
