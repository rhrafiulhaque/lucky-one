import './Shop.css';

import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SelectedShoes from '../SelectedShoes/SelectedShoes';

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
                               
                <SelectedShoes cart={cart}></SelectedShoes>
            </div>
            
        </div>
    );
};

export default Shop;