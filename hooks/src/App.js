import React, {useState, createContext, useContext} from 'react'
import ComponentA from "./ComponentA"


export const UserContext = createContext();
const App = () => {
  
  const [userName, setUserName] = useState("Shree Ram");

  return (
    <div>
       <UserContext.Provider value={userName} >
           <ComponentA />
       </UserContext.Provider>
    </div>
  )
}

export default App

