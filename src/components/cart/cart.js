import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const price = cart.reduce((total, product) => total + product.price,0)
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        price = price + product.price * product.quantity|| 1;


    }
    let shipping = 0;
    if (price > 35) {
        shipping = 0;
    }
    else if (price > 15) {
        shipping = 4.99;
    }
    else if (price > 0) {
        shipping = 12.99;
    }
    let tax = (price * 0.1);//10% tax
    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (

        <div >
            <h4 className="cart-summery">Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(price)}</p>
            <p><small>Shipping Cost: {formatNumber(shipping)}</small></p>
            <p><small>TAX: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(price + shipping + tax)}</p>
            <br />
            {
                props.children
            }

        </div>

    );
};

export default Cart;