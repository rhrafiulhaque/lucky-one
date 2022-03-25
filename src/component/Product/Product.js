import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {product} = props;
    const{name,img,price}=product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
            </div>
            <div className="product-cart">
                <button  className='cart-btn'>
                    Add to Cart <FontAwesomeIcon icon={faCartArrowDown} />
                </button>
            </div>
        </div>
    );
};

export default Product;