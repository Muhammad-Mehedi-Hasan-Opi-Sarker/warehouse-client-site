import React, { useEffect, useState } from 'react';
import './Inventory.css'
import { useParams } from 'react-router-dom';
const Inventory = () => {
    const { inventoryid } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = `https://stark-shore-64587.herokuapp.com/product/${inventoryid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='inventory'>
            <div className="card w-50">
                <div className="card-body">
                    <img style={{height:'300px',width:'400px'}} src={product.img} alt="" />
                    <h1>{product.name}</h1>
                    <h1>Price:${product.price}</h1>
                    <h3>Quantity: {product.quantity}</h3>
                    <h3>Supplier Name: {product.supplierName}</h3>
                    <p>{product.description}</p>
                </div>
            </div>

        </div>
    );
};

export default Inventory;