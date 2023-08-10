/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidShoppingBagAlt } from "react-icons/bi";

const SearchMenu = () => {
  return (
    <div className='blackColor'>
      <div className='container searchmenu'>
        <div className='searchRow'>
          {/* first colm */}
          <div className='col text-white'>
            <h2>Electro.</h2>
          </div>
          {/* second col */}
          <div className='col-6 '>
            <div className='searchMenuForm'>
              <form>
                <select name="cars" id="cars">
                  <option value="home">Category</option>
                  <option value="products">Products</option>
                  <option value="newarrivel">New Arrivel</option>
                  <option value="offers">Offers</option>
                  <option value="topselling">Top Selling</option>
                </select>
                <input type='text' />
                <input type='button' className='redColor text-white' value={"Search"} />
              </form>
            </div>
          </div>
          {/* third col */}
          <div className='col'>
            <div className='text-white d-flex searchmenuRight'>
              {/* your whislist */}
              <div className='flex-nowrap text-white yourwishlist'>
                <div>
                  <AiOutlineHeart size={22} />
                  <span className='notificationNum bg-info'>3</span>
                </div>
                <div>
                  <p>Your Wishlist</p>
                </div>
              </div>
              {/* your card */}
              <div className='flex-nowrap text-white yourcard'>
                <div><BiSolidShoppingBagAlt size={22} />
                  <span className='notificationNum'>4</span></div>
                <p>Your Card</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchMenu;
