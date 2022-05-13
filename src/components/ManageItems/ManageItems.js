import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Products from '../Products/Products';
import './ManageItems.css'

const ManageItems = () => {
    const navigate = useNavigate();
    return (
        <div className='manageitems'>
           <Products></Products>
           <Link to={'/myitems'}>ManageInventories</Link>
        </div>
    );
};

export default ManageItems;