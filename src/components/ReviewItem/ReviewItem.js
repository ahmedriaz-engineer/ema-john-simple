import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    // console.log(props);
    const { name, quantity, img, key, price} = props.product;
    return (
        <div className="review-item product">
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className="product-name">{name}</h4>
                <p>Quantity: {quantity}</p>
                <p><small>Price: {price}</small></p>
                <br />
                <button onClick={()=> props.removeProduct(key)}className="cart-button">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;