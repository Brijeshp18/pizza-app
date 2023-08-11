import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/PIZZABGC.jpg'
import '../styles/Home.css'
import { Opacity } from '@mui/icons-material'
const Home = () => {
  return (
    <div className='home'  style={{ backgroundImage: `url(${BannerImage})` ,opacity:'0.9' }}>
    <div className="headerContainer">
        <h1>Brijesh Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <div className='button-wrap'> 
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link></div>
      </div>

    </div>
  )
}

export default Home