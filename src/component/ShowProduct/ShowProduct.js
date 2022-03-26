import React from 'react';
import './ShowProduct.css'


const ShowProduct = (props) => {    
    const{name}=props;
    return (
        <div className='shoow'>
            <h4>{name}</h4>           
            
        </div>
    );
};

export default ShowProduct;