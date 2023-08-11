import React from 'react'
import {MenuList} from '../helpers/Menulist'
import MenuItem from '../components/MenuItem'
import'../styles/menu.css'
const Menu = () => {
  
  return (
   
        <div className='menu'>
          <h1 className='menuTitle'>OUR MENU</h1>
        <div className='menuList'>
          {MenuList.map((menuItem,key)=>(
            <MenuItem data={menuItem}/>)

            )
            }
    </div></div>
  )
}

export default Menu