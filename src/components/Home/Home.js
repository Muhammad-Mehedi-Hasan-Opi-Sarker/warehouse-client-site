import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Items from '../Items/Items';
import Features2 from '../Features2/Features2';
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <Banner></Banner>
            <Features2></Features2>
            <Items></Items>
            <Features></Features>
            <Link style={{marginTop:'10px',}} className='text-decoration-none' to={'/manageitems'}><h5> See Items</h5></Link>
        </div>
    );
};

export default Home;