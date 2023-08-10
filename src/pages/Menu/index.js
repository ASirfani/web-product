import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import TemplateCard from '../../component/TemplateCard/index'

const Menu = () => {
  return (
    <div className='container'>
      <div className='subsMenu'>
        <div><Link to="/"><span>Home</span></Link></div>
        <div><Link to="/products"><span>Products</span></Link></div>
        <div><Link to="/new-arrivals"><span>New Arrivals</span></Link></div>
        <div><Link to="/offers"><span>Offer</span></Link></div>
        <div><Link to="/top-selling"><span>Top Selling</span></Link></div>
      </div>
      <div className='container'>
        <div className='layoutProduct'>
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />

        </div>
      </div>
    </div>
  )
}

export default Menu;
