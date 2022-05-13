import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://stark-shore-64587.herokuapp.com/product').then(res=>res.json()).then(data=>setProducts(data));

    },[])
    return (
        <div className='pro mt-5'>
        <h1>Our Products Items</h1> 
       <div className="container cont">
       {
            products.map(product=><Product
            key={product._id}
            product={product}
            ></Product>)
        }   
       </div>
        </div>
    );
};

export default Products;