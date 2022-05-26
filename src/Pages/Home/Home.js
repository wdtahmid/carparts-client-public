import React from 'react';
import Banner from './Banner/Banner';
import AboutUs from './Sections/AboutUs/AboutUs';
import ContactUsSection from './Sections/Contact/ContactUsSection';
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
            <AboutUs />
            <ContactUsSection />
        </div>
    );
};

export default Home;