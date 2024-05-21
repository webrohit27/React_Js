import React, { useContext } from 'react'
import { useContext } from 'react';

const ComponentC = () => {

    const userName = useContext(UserContext);

  return (
    <div>
        <p> {userName} </p>
    </div>
  )
}

export default ComponentC
