import './Shop.css';

import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));

    },[])

    const handleAddProduct=(products)=>{
        const newCart = [...cart,products];
        setCart(newCart);
        console.log(products);
    }
    return (
        <div className='shop-conatianer'>
            <div className="product-container">
            {
            products.map(product=><Product key={product.id}
                    product={product}
                    handleAddProduct={handleAddProduct}
            ></Product>)
            }
            </div>
            <div className="cart-container">
                <h1>Selected Shoes</h1>
                
                {/* <Cart cart={cart}></Cart> */}
            </div>
            
        </div>
    );
};

export default Shop;