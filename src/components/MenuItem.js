import { Key } from '@mui/icons-material'
import React from 'react'

const MenuItem = (props) => {
  const {image,name,price,id }=props.data
  return (
    <div className='menuItem'Key={id}>
     <div  style={{ backgroundImage: `url(${image})` }}></div>
     <h1>{name}</h1>
     <p>${price}</p>


    </div>
  )
}

export default MenuItem