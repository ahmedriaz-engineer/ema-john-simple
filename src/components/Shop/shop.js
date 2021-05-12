import React, { useState } from 'react';
import fakeData from "../../fakeData"
import Cart from '../cart/cart';
import Product from '../Product/Product';
import "./shop.css";




const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const addCart = (product) => {
        console.log("clicked", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    


    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product =>
                        <Product
                            addCart={addCart}
                            product={product}>

                        </Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart = {cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;