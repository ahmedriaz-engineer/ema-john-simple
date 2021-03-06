import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Product from '../Product/Product';
import './ProductDetail.css'

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://hidden-crag-74603.herokuapp.com/product/${productKey}`)
        .then(response => response.json())
        .then(data => setProduct(data))
    }, [productKey])
    
    
    return (
        <div>
            <h1>Your Product Details </h1>
            <Product showAddToCart ={false} product ={product}>

            </Product>
            
        </div>
    );
};

export default ProductDetail;