import React from 'react';
import Banner from './Banner/Banner';
import Parts from './Sections/Parts/Parts';
import Reviews from './Sections/Reviews/Reviews';
import Summery from './Sections/Summery/Summery';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <Summery />
            <Reviews />
        </div>
    );
};

export default Home;