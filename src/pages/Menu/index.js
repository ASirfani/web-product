import React from 'react'
import './index.css'
import { Link, Outlet } from 'react-router-dom';
const Menu = () => {
  return (

    <>

      <div className='container'>
        <div className='subsMenu'>
          <div><Link to="/"><span>Home</span></Link></div>
          <div><Link to="/products"><span>Products</span></Link></div>
          <div><Link to="/new-arrivals"><span>New Arrivals</span></Link></div>
          <div><Link to="/offers"><span>Offer</span></Link></div>
          <div><Link to="/top-selling"><span>Top Selling</span></Link></div>
        </div>
      </div>
      <div className='layoutProduct'>
        <Outlet />
      </div>

    </>
  )
}

export default Menu;
