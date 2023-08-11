import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsappIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
     <div className='socialMedia'>
      <a  href='https://www.instagram.com/'><InstagramIcon/></a> <a  href='https://www.whatsapp.com/'><WhatsappIcon/></a> <a  href='https://www.fb.com/'><FacebookIcon/></a>
     </div>
     <p> &copy; 2023 brijeshpizza.com </p>
    </div>
  )
}

export default Footer