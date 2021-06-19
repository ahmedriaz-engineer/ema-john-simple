import React from 'react';
import {  } from "./product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props)
    const {name, img, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div>
                <img src= {img} alt=""/>
            </div>
            <div className="product-info">
                <h4 ><Link to={"/product/"+key}>{name}</Link></h4>
                <p><small>by: {seller} </small></p>
                <br/>
                <p>Price: ${price}</p>
                
                <p><small>only {stock} left in stock - Order soon.</small></p>
                {props.showAddToCart && <button className="cart-button" onClick = {()=>props.addCart(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>}
            </div>
            
        </div>
    );
};

export default Product;