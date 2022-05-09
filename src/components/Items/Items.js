import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';
const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setItems(data))
    }, [])
    return (
        <div className='container mt-5'>
            <h1>Six Items Demos Available Laptop</h1>
            <div className="items mt-5">
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;