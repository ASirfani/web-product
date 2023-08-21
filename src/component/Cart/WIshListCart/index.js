import React from 'react';
import './index.css';

const Wishlist = ({ selectedProducts }) => {
  return (
    <div className="container">
      <div className="col-md-12">
        <div className="main-heading mb-10">My wishlist</div>
        {selectedProducts.length > 0 ? (
          <div className="table-wishlist">
            <table cellPadding="0" cellSpacing="0" border="0" width="100%">
              <thead>
                <tr>
                  <th width="45%">Product Name</th>
                  <th width="15%">Unit Price</th>
                  <th width="15%">Stock Status</th>
                  <th width="15%"></th>
                  <th width="10%"></th>
                </tr>
              </thead>
              <tbody>
                {selectedProducts.map((product, index) => (
                  <tr key={index}>
                    <td width="45%">
                      <div className="display-flex align-center">
                        <div className="img-product">
                          <img src={product.image} alt="" className="mCS_img_loaded" />
                        </div>
                        <div className="name-product">{product.name}</div>
                      </div>
                    </td>
                    <td width="15%" className="price">{product.price}</td>
                    <td width="15%">
                      <span className="in-stock-box">in shock</span>
                    </td>
                    <td width="15%">
                      <button className="round-black-btn small-btn">Add Cart</button>
                    </td>
                    <td width="10%" className="text-center">
                      
					  <button className="round-black-btn small-btn">Remove</button>
                    
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
    </div>
  );
};

export default Wishlist;
