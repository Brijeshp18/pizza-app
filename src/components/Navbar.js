import React, { useState } from 'react'
import Logo from '../assets/pizza.png'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import { Button } from '@mui/material';
const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className='navbar'>
        <div className='leftside'  id={openLinks ? "open" : "close"}>
         <img alt='' className='logo' src={Logo}/>
         <div className='hiddenlink'>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
         </div>
        </div>
        <div className='rightside'>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <div className='box'></div>
         
        </div>
        <Button onClick={toggleNavbar}>
            <ReorderIcon/>
          </Button>
    </div>
  )
}

export default Navbar