import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Items from '../Items/Items';
import Features2 from '../Features2/Features2';
const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Features2></Features2>
            <Items></Items>
            <Features></Features>
        </div>
    );
};

export default Home;