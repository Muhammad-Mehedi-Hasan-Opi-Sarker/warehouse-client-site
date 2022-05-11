import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Items from '../Items/Items';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Features></Features>
            <Products></Products>
        </div>
    );
};

export default Home;