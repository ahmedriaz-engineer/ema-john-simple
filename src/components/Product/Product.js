import React from 'react';
import {  } from "./product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props)
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src= {img} alt=""/>
            </div>
            <div className="product-info">
                <h4 >{name}</h4>
                <p><small>by: {seller} </small></p>
                <br/>
                <p>Price: ${price}</p>
                
                <p><small>only {stock} left in stock - Order soon.</small></p>
                <button className="cart-button" onClick = {()=>props.addCart(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;