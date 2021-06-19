import happyImage from '../../images/giphy.gif';
import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

import './review.css'
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();
    const handleProceedCheckout = () => {
        console.log("clicked place order");
        setCart([]);
        setOrderPlaced(true);
        history.push('/shipment')
        
        processOrder();
    }

    const removeProduct = (productKey) => {
        console.log("remove clicked", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)
        // const productValues = Object.values(savedCart)

        fetch('http://localhost:5000/productsByKeys', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(productKeys)
        })
        .then(response =>response.json())
        .then(data => setCart(data))

    }, [])
    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt="" />
    }
    return (
        <div className="shop-container">

            <div className="product-container">
                {cart.map(pd => <ReviewItem
                    product={pd}
                    removeProduct={removeProduct}
                    key={pd.key}
                >
                </ReviewItem>)}
                {thankYou}
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick ={handleProceedCheckout} className="cart-button">Proceed Checkout</button>
                </Cart>
            </div>
            

        </div>
    );
};

export default Review;