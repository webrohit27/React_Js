import Navbar from './components/Navbar';
import './App.css';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App(){

let [name, setName] = useState()

let name = "Rohit";
function handleClick(){
 
}
  return(

    <div> 
       <Navbar />
       <Sidebar />
    </div>
  );
}

export default App;
