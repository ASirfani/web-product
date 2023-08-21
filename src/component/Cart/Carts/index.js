/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import './index.css'
const Cart = ({ cartItems }) => {
	return (
		<>
			{cartItems.length > 0 ? (
				<div className="container">
					<div className="col-12">
						<div className="cart-table clearfix">
							<table className="table table-responsive">
								<thead>
									<tr>
										<th>Product</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
								{cartItems.map((item, index) => (
									<tr key={index}>
										<td className="cart_product_img d-flex align-items-center">
											<a className='imgs' href="#"><img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="" className="mCS_img_loaded" />
											</a>
											<h6>{item.name}</h6>
										</td>
										<td className="price"><span>{item.price}</span></td>
										<td className="qty">
											<div className="quantity">
												<span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true"></i></span>
												<input type="number" className="qty-text" id="qty" step="1" min="1" max="99" name="quantity" value="1" />
												<span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true"></i></span>
											</div>
										</td>
										<td className="total_price"><span>$49.88</span></td>
									</tr>
									))}
								</tbody>
							</table>


						</div>

						<div className="cart-footer d-flex mt-30">
							<div className="back-to-shop w-50">
								<a href="shop-grid-left-sidebar.html">Continue shooping</a>
							</div>
							<div className="update-checkout w-50 text-right">
								<a href="#">clear cart</a>
								<a href="#">Update cart</a>
							</div>
						</div>

					</div>
					<div className='bottomtablecart'>
						<div className="col-12 col-md-6 col-lg-4">
							<div className="shipping-method-area mt-70">
								<div className="cart-page-heading">
									<h5>Shipping method</h5>
									<p>Select the one you want</p>
								</div>
								<div className="custom-control custom-radio mb-30">
									<input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
									<label className="custom-control-label d-flex align-items-center justify-content-between" for="customRadio1"><span>Next day delivery</span><span>$4.99</span></label>
								</div>

								<div className="custom-control custom-radio mb-30">
									<input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
									<label className="custom-control-label d-flex align-items-center justify-content-between" for="customRadio2"><span>Standard delivery</span><span>$1.99</span></label>
								</div>

								<div className="custom-control custom-radio">
									<input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
									<label className="custom-control-label d-flex align-items-center justify-content-between" for="customRadio3"><span>Personal Pickup</span><span>Free</span></label>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-4">
							<div className="cart-total-area mt-70">
								<div className="cart-page-heading">
									<h5>Cart total</h5>
									<p>Final info</p>
								</div>

								<ul className="cart-total-chart">
									<li><span>Subtotal</span> <span>$59.90</span></li>
									<li><span>Shipping</span> <span>Free</span></li>
									<li><span><strong>Total</strong></span> <span><strong>$59.90</strong></span></li>
								</ul>
								<a href="checkout.html" className="btn karl-checkout-btn">Proceed to checkout</a>
							</div>
						</div>
					</div>


				</div>
			) : (<p>Your Cart is empty.</p>)}
		</>
	)
}

export default Cart;