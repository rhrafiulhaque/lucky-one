import React from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';
import './SelectedShoes.css'
    
const SelectedShoes = (props) => {
    const {cart, clearCart,chooseOne}=props;
     

         
    return (
        <div className='show-product'>
            <h3>Selected Shoes: {cart.length}</h3> 
            <p>[Please Do not select Above Four Shoes]</p>
          {
              cart.map(carts=><ShowProduct 
                key={carts.id}
                name={carts.name}
              ></ShowProduct>)
              
          }

          <button onClick={()=>chooseOne()} className='choose'>Choose One For Me</button>
          <button onClick={()=>clearCart()} className='clear'>Clear Cart</button>

        </div>
    );
};

export default SelectedShoes;