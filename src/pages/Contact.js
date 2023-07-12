import React from 'react'
import Pizzacontact from "../assets/pizza.png"
import '../styles/contact.css'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="leftside" style={{ backgroundImage: `url(${Pizzacontact})` }}></div>
        <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="7"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact