import Navbar from './components/Navbar';
import './App.css';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Main from "./components/Main";

function App(){

let [title, setTitle ] = useState("Home");
let [content, setContent] = useState("What is React ?")

function handleClick(){
  setTitle("Introduction");
  setContent("React is a JavaScript library for building user interfaces.");
  
   
}
  return(

    <div> 
       <Navbar />
      <div className='Sidebar-Main-Container'>

        <Sidebar  fun = {handleClick}/>

        <Main title = {title} content = {content} />
      </div> 
    </div>
  );
}

export default App;
