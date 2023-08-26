/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './index.css';
import MenuDashboardContianer from '../../container/MenuDashboardContainer';
import SidebarContainer from '../../container/SidebarContainer';
const DashboardLayout = () => {


  return (
    <div className='dashboard'>
      {/* side */}
      <div className='dashboard-sidebar'>
        <div className='dashboard-sidebar-content'>
          <SidebarContainer />
        </div>
      </div>
      {/* main */}
      <div className='main'>
        <div className='dashtboard-main-topmenu'>
          <MenuDashboardContianer />
        </div>
        <div className='dashboard-main-content container'>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
