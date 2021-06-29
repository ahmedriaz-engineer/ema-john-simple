import React, { useEffect, useState } from 'react';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

import Product from '../Product/Product';
import "./Shop.css";
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';



const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://hidden-crag-74603.herokuapp.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    const addCart = (product) => {
        // console.log("clicked", product);
        // const newCart = [...cart, product];
        // setCart(newCart);
        // const sameProduct = newCart.filter(pd => pd.key === product.key);

        // const count = sameProduct.length
        // addToDatabaseCart(product.key, count)

        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others, sameProduct]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }

        setCart(newCart);
        addToDatabaseCart(product.key, count);


    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        // console.log(savedCart);
        const productKeys = Object.keys(savedCart);
        console.log(productKeys);
        fetch('https://hidden-crag-74603.herokuapp.com/productsByKeys', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(productKeys)
        })
        .then(response =>response.json())
        .then(data => setCart(data))

    }, [])

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product =>
                        <Product
                            showAddToCart={true}
                            addCart={addCart}
                            product={product}
                            key={product.key}>


                        </Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review"><button className="cart-button">Review Order</button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Shop;