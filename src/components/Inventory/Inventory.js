import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {inventoryid} =useParams();
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/product/${inventoryid}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div>
            <h1>your about id{inventoryid}</h1>
            <h1>Product name: {product.name}</h1>
            
        </div>
    );
};

export default Inventory;