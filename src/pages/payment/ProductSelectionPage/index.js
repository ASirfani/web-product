import React from 'react';
import './index.css'
import Wishlist from '../../../component/Cart/WIshListCart';


const ProductSelectionPage = (props) => {
    const selectedProducts = props.favoriteData;
//    console.log(selectedProducts)
    return (
            <div className='about-us'>
                <h1 className='about titlePage'>Wishlist</h1>
                <Wishlist selectedProducts={selectedProducts}/>
            </div>


    );
};

export default ProductSelectionPage;
