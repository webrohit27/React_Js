import React from 'react'
import { useNavigate } from 'react-router-dom';


const About = () => {
    
  const Navigate = useNavigate();

  function clickHandler(){
      Navigate("/work");
  }

  return (
    <div>
     <div>
      this is about page
    </div>
      <button onClick={clickHandler}>Back to work page</button>
   </div>
  )
}

export default About
