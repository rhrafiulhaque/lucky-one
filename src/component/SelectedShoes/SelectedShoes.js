import React from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';
import './SelectedShoes.css'

const SelectedShoes = (props) => {
       const {cart}=props;      
    return (
        <div className='show-product'>
            <h3>Selected Shoes: {cart.length}</h3> 
            <p>[Please Do not select Above Four Product]</p>
          {
              cart.map(carts=><ShowProduct 
                key={carts.id}
                name={carts.name}
              ></ShowProduct>)
              
          }

          <button className='choose'>Choose One For Me</button>
          <button className='clear'>Clear Cart</button>

        </div>
    );
};

export default SelectedShoes;