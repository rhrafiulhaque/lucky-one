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

    // New product add in cart 

    const handleAddProduct=(products)=>{
        const newCart = [...cart,products];
        if(cart.length>=4){
            alert('Don\'t Select Above Four Product! Thank You!');
        }else{
            setCart(newCart);
        }
        
    }


    // Generate Random Number 
    function reset(){
        const x = Math.floor((Math.random() * 10));
        if(x>3){
         return reset();
        }
        else{
        return x;
        }
        }

    // One Product SHow 
    const chooseOne=()=>{        
            const x= reset();
            setCart(cartList=>cartList.filter((_,i)=>i===x));       
            
    }

    const clearCart =()=> setCart([]);


   
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
                               
                <SelectedShoes cart={cart} clearCart={clearCart} chooseOne={chooseOne}  ></SelectedShoes>
            </div>
            
        </div>
    );
};

export default Shop;