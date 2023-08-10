/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { CiLocationOn } from 'react-icons/ci'



const Footer = () => {
  const sizeIcon = 16;
  return (
    <div>
      <div className='blackColor topFooter'>
        <div className='container text-white'>
          <div className='footerRow'>
            {/* first Colm */}
            <div className='col aboutus'>
              <h5>ABOUT US</h5>
              <ul className='footerFontTxt txtwhite'>
                <li><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</span></li>
                <li><a className='col ' href='#'><BsFillTelephoneFill className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite footerFontTxt '> +0123456789</span></a></li>
                <li> <a className='col ' href='#'><BiMailSend className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite footerFontTxt'> Example@gmail.com</span></a>
                </li>
                <li> <a className='col ' href='#'><CiLocationOn className='txtredColor icons' size={sizeIcon} /> <span className='txtwhite footerFontTxt '> 1734 Stonecoal Road</span></a></li>
              </ul>
            </div>

            {/* second colm */}
            <div className='col categories'>
              <h5>CATEGORIES</h5>
              <ul className='footerFontTxt txtwhite'>
                <li><a href='#'> <span className='txtwhite footerFontTxt '>Hot deals</span></a></li>
                <li> <a href='#'><span className='txtwhite footerFontTxt'>Laptops</span></a></li>
                <li> <a href='#'><span className='txtwhite footerFontTxt '>Smartphones</span></a></li>
                <li> <a href='#'><span className='txtwhite footerFontTxt '>Cameras</span></a></li>
                <li> <a href='#'><span className='txtwhite footerFontTxt '>Accessories</span></a></li>
              </ul>
            </div>

            {/* third */}
            <div className='col information'>
              <h5>INFORMATION</h5>
              <ul className='footerFontTxt txtwhite'>
                <li><a href='#'> <span className='txtwhite footerFontTxt '> About Us</span></a></li>
                <li> <a href='#'> <span className='txtwhite footerFontTxt'> Contact Us</span></a></li>
                <li> <a href='#'> <span className='txtwhite footerFontTxt '> Privacy Policy</span></a></li>
                <li> <a href='#'> <span className='txtwhite footerFontTxt '> Orders and Returns</span></a></li>
                <li> <a href='#'> <span className='txtwhite footerFontTxt '> Terms & Conditions</span></a></li>
              </ul>
            </div>
            <div className='col service'>
              <h5>SERVICE</h5>
              <ul className='footerFontTxt txtwhite'>
                <li><a href='#'> <span className='txtwhite footerFontTxt '> My Account</span></a></li>
                <li> <a href='#'> <span className='txtwhite footerFontTxt'> View Cart</span></a></li>
                <li> <a href='#'> <span className='txtwhite footerFontTxt '> Wishlist</span></a></li>
                <li> <a href='#'> <span className='txtwhite footerFontTxt '> Track My Order</span></a></li>
                <li> <a href='#'> <span className='txtwhite footerFontTxt '> Help</span></a></li>

              </ul>
            </div>
          </div>

        </div>

      </div>

      <div className='lightBlackColor bottomFooter'>
        <div className='cardsupporter'>
          <div className='cardbg'>
          </div>
        </div>
        <p className='copyright'>Copyright ©2023 All Rights Reserved by <span className='spanTopMenu'>AlphaWebz</span></p>
      </div>
    </div>
  )
}

export default Footer
