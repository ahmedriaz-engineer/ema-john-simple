import React from 'react';
import './Inventory.css'

const Inventory = () => {
    const handleAddProduct = () => {
        const product = {};
        fetch('https://hidden-crag-74603.herokuapp.com/addProduct', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product)
        })

    }
    return (
        <div>
            <form onSubmit=''>
                <p><span>Name: </span><input type="text"></input></p>
                <p><span>Price: </span><input type="text"></input></p>
                <p><span>Quantity: </span><input type="text"></input></p>
                <p><span>Product Image: </span><input type="file"></input></p>
                <button onClick={handleAddProduct}>Add Product</button>

            </form>

        </div>
    );
};

export default Inventory;