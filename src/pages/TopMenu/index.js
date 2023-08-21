/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { CiLocationOn } from 'react-icons/ci'
import { BiDollar } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsFillTelephoneForwardFill, BsPersonCircle } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
// AiOutlineMenuFold


const TopMenu = () => {
  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
  };
  const [toggle, setToggle] = useToggle();


  const sizeIcon = 16;
  return (
    <div className='lightBlackColor'>
      <Container className='topmenu' >
        <Row className='row'>
          <Col className='cols'>
            <a className='col' href='#'><BsFillTelephoneFill className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite spanTopMenu'> +0123456789</span></a>
            <a className='col' href='#'><BiMailSend className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite spanTopMenu'> Example@gmail.com</span></a>
            <a className='col' href='#'><CiLocationOn className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite spanTopMenu'> 1734 Stonecoal Road</span></a>
          </Col>

          <Col className='cols rtf'>
            <a className='col' href='#'><BsPerson className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite spanTopMenu'> My Acount</span></a>
            <a className='col' href='#'><BiDollar className='txtredColor icons' size={sizeIcon} /><span className='txtwhite spanTopMenu'>USD</span></a>
          </Col>
        </Row>
      </Container >

      <div className='mobile-size container'>
        <div className='menuIcon' onClick={setToggle}>
          {/* <AiOutlineMenuFold size={30}   className='closeMenu'/> */}
          <AiOutlineMenuUnfold size={30} className='openMenu' />
        </div>
        <div className='phone-number'>
          <BsFillTelephoneForwardFill size={20} /> +0123456789
        </div>
        <div className='acount'>
          <BsPersonCircle size={30} />
        </div>
      </div>
      <div>


        {toggle && (
          <div className='container'>
            <div className='mobileMenu'>
              <div><NavLink to="/home" activeClassName="active" ><span>Home</span></NavLink></div>
              <div><NavLink to="/products"><span>Products</span></NavLink></div>
              <div><NavLink to="/new-arrivals"><span>New Arrivals</span></NavLink></div>
              <div><NavLink to="/offers"><span>Offer</span></NavLink></div>
              <div><NavLink to="/top-selling"><span>Top Selling</span></NavLink></div>
            </div>
          </div>
        )}

      </div>

    </div >
  )
}

export default TopMenu
