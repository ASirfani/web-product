import React from 'react';
import './index.css';

const Wishlist = ({ selectedProducts }) => {
  return (
    <div className="wishlist-container">
      <div className="main-heading">My wishlist</div>
      {selectedProducts.length > 0 ? (
        <div className="table-wishlist">
          <table cellPadding="0" cellSpacing="0" border="0" width="100%">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Stock Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {selectedProducts.map((product, index) => (
                <tr key={index}>
                  <td>
                    <div className="product-info">
                    <img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="" className="mCS_img_loaded" />
												
                      <div className="product-name">{product.name}</div>
                    </div>
                  </td>
                  <td className="price">{product.price}</td>
                  <td>
                    <span className="in-stock-box">In stock</span>
                  </td>
                  <td>
                    <button className="round-black-btn small-btn">Add Cart</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
