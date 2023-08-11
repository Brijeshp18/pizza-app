import React, { useState,useEffect } from 'react'
import Pizzacontact from "../assets/pizza.png"
import '../styles/contact.css'
const Contact = () => {
  const[formData,setformData]=useState({
    fullname:"",
    email:"",
    message:""
  })
  const [formErrors,setformErrors]=useState({});
  const[flag,setFlag]=useState(false)
  useEffect(() => {
    console.log(formErrors)
  if(Object.keys(formErrors).length===0 && flag){console.log(formData)}
  }, [formErrors])
  
  
  const hanfleBarChange =(e)=>{
    const {name,value}=e.target;
    setformData((prev)=>({...prev,[name]:value}))
  }
  const handlebarSubmit=(e)=>{
e.preventDefault();
console.log(formData);
setformErrors(validate(formData))
setFlag(true)

  }
  const validate=(values)=>{
const errors={};
const pattern=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
if(!values.fullname){errors.fullname="full name is required"}
if(!values.email){errors.email="email is required"}
else if(!pattern.test(values.email)){errors.email="email is not valid"}
if(!values.message){errors.message="message should not empty"}
else if(values.message.length<5){errors.message="message should not less than 5 characters"}
return errors; }

  return (


    <div className='contact'>
        <div className="leftside" style={{ backgroundImage: `url(${Pizzacontact})` }}></div>
        <div className="rightSide">
        <h1> Contact Us</h1>
  <div className='form-container'>
    {Object.keys(formErrors).length === 0 && flag?<p>Thank You For Contacting Us.Have A Nice DAY 😊😊</p>:null}
        <form id="contact-form" onSubmit={handlebarSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="fullname" placeholder="Enter full name..." type="text" value={formData.fullname} onChange={(e)=>hanfleBarChange(e)} />
          <p>{formErrors.fullname}</p>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="text" value={formData.email} onChange={(e)=>hanfleBarChange(e)} />
          <p>{formErrors.email}</p>
          <label htmlFor="message">Message</label>
          <textarea
            rows="7"
            placeholder="Enter message..."
            name="message"
      
            value={formData.message}
            onChange={(e)=>hanfleBarChange(e)}
          ></textarea>
           <p>{formErrors.message}</p>
         <div className='btnn'> <button type="submit"> Send Message</button> </div>
        </form></div>
      </div>
    </div>
  )
}

export default Contact