
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';




function App() {
  return (
     
   <div className='App'>
        <nav>
          <ul>
             <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/work">Work</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>

           
          </ul>
        </nav>



     <Routes>
      <Route  path='/' element={<MainHeader />}>  
      
      {/* default Route */}
      <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound/>} />
        </Route> 
    </Routes>
   </div>




   




  );
}

export default App;
