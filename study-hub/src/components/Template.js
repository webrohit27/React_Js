import React from 'react'
// import frameImage from "../assets/pic1.jpg"

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

  return (
    <div>
      
        <div>
             <h1>{title}</h1>
             <p>
              <span>{desc1}</span>
              <span>{desc2}</span>
             </p>  

             {formtype === "signup" ?
             (<SignupForm />):
             (<LoginForm />)}

             <div>
              <div></div>
              <p>OR</p>
              <div></div>
             </div>

             <button>
                Sign in With Google
             </button>
        </div>


        <div>
          {/* <img src={frameImage}
          alt="Pattern"
          width={558}
          height={504}
          loading='lazy' /> */}

          <img src={frameImage}
          alt="Students"
          width={558}
          height={504}
          loading='lazy' />

          <img src={frameImage}
          alt="Pattern"
          width={558}
          height={490}
          loading='lazy' />


        </div>
    </div>
  )
}

export default Template
