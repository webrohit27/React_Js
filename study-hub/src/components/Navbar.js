import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
 
<Link to="/">
    <img src={logo} />
</Link>
    </div>
  )
}

export default Navbar
