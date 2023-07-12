import React from 'react'
import AboutImage from '../assets/dhabe-da-keema.jpg'
import '../styles/about.css'
const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop'  style={{ backgroundImage: `url(${AboutImage})` }}></div>
      <div className='aboutBottom '>
        <h1>ABOUT US</h1>
        <p>Punisher #12, by Jason Aaron, Jesùs Saiz, Paul Azaceta, and Matt Hollingsworth, marks the conclusion of the most recent ongoing series starring Frank Castle as the protagonist, with a story aptly titled "Punisher no More". After the Punisher is captured by the Avengers, he is waiting for his judgment in a cell in Dr. Strange's Sanctum. Frank is visited by the heroes one by one, but they all fail in making him feel even a shred of remorse. However, when Maria finally tells Frank that she was going to divorce him before she was killed and that she completely rejects everything he did "in her name", the Punisher is finally broken. Frank summons the last remnants of the Beast's power and turns the demonic flames on himself, in what looks like a fiery suicide.

The Punisher's Most Controversial Series E
        </p>
      </div>
    </div> 
  )
}

export default About