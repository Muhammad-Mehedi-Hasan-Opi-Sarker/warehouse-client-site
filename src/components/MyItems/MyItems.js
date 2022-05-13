import React from 'react';
import useMyItems from '../../hooks/useMyItems';
import './MyItems.css';
const MyItems = () => {
    const [products,setProducts]= useMyItems();
    const handleDelete =id=>{
        const proceed = window.confirm('Are you sure')
        if(proceed){
            const url = `https://stark-shore-64587.herokuapp.com/product/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining = products.filter(product=>product._id !==id);
                setProducts(remaining);
            })
        }
    }
    return (
        <div className='myItems'>
            <h1>My Items</h1>
            {
                products.map(product=> <div key={product._id}>
                    <h3>{product.name}<button onClick={()=>handleDelete(product._id)} className='btn bg-danger'>Delete</button></h3>
                    
                </div>)
            }
        </div>
    );
};

export default MyItems;