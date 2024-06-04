import React from 'react'
import { Route, Routes } from 'react-router-dom'

const SignupForm = () => {
  return (
    <div>
        <h1>Please sign up Here</h1>
        <Routes>
          <Route>About</Route>
          <Route>Home</Route>
          <Route>Contact</Route>
          <Route>Work</Route>
        </Routes>
    </div>
  )
}

export default SignupForm
