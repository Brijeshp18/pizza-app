import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsappIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
     <div className='socialMedia'>
      <a  href='https://www.instagram.com/'><InstagramIcon/></a> <WhatsappIcon/><FacebookIcon/>
     </div>
     <p> &copy; 2023 brijeshpizza.com </p>
    </div>
  )
}

export default Footer