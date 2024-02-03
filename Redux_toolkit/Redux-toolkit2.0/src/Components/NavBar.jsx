import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
      
      <div className='main'>
        <span style={{fontSize:"20px"}}>Redux Store</span>

      <div>
       <Link   className='NavLink' to='/' >Home</Link>
       <Link className='NavLink'  to='/cart' >Cart</Link>
      <span className='cartCount'>   My Bag</span>
      </div>
    </div>
       
  )
}

export default NavBar
