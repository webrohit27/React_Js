import React, { useState } from 'react'
 import {AiOutLineEyeInvisible, AiOutLineEye} from "react-icons/ai"
import { Link } from 'react-router-dom';

const LoginForm = () => {

const [formData, setFormData] = useState( {
    email:'', password:""
})

const [showPassword, setShowPassword] = useState(false);

function changeHandler(event){
    
    setFormData( (prevData) => (
        {
            ...prevData,
            [event.target.name] : event.target.value
        }
    ))
}

  return (
    <form>
        <label>
            <p>
                Email Address <sup>*</sup>
            </p>

            <input
            required 
            type='text'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email id'
            />
            </label>

        <label>
            <p>
                Password<sup>*</sup>
            </p>

            <input
            required 
            type={showPassword ? ('text') : ("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Password'
            />

            <span onClick={()=> setShowPassword ((prev) => !prev)}>
                {showPassword ? (<AiOutLineEyeInvisible />) : (<AiOutLineEye/> ) }
            </span>

            <Link>
            to="#"
            <p> 
                Forget Password
            </p>
            </Link>
        </label>
         
         <button>
              Sign In
        </button>
        
    </form>
  )
}

export default LoginForm
