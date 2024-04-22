import Navbar from './components/Navbar';
import './App.css';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Main from "./components/Main";
import { titles } from './Data';
import { contents } from './Data';

function App(){

let [title, setTitle] = useState("Home");
let [content, setContent] = useState("What is React ?");

function handleClick(idx){
 setTitle(titles[idx]);
 setContent(contents[idx])
  
}
  return(

    <div> 
       <Navbar />
      <div className='Sidebar-Main-Container'>

        <Sidebar  handleClick = {handleClick}/>

        <Main title = {title} content = {content} />
      </div> 
    </div>
  );
}

export default App;
