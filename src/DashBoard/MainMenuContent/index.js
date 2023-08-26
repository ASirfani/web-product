import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import './index.css'
const MainMenuContent = () => {
  return (
    <div className='dashboard-main-content-title container'>
      <div className='left-menu-dashboard'>
        <h2>Products</h2>
      </div>
      <div className='right-menu-dashboards'>
        <div className='searchbtn'>
          <AiOutlinePlus size={18} /> <span>New</span>
        </div>
      </div>
    </div>
  )
}

export default MainMenuContent;