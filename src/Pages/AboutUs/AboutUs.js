import React from 'react';
import bluering from '../../assets/images/bluering.png';

const AboutUs = () => {
    return (

        <>
            <div className='py-20 bg-info text-center text-white'>
                <h2 className='text-6xl uppercase drop-shadow-xl font-bold'>About Us</h2>
            </div>

            <div className='py-24'>
                <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between text-center md:text-left'>
                    <div className='m-10 md:mr-10'><img src={bluering} alt="" /></div>
                    <div className='m-10 md:m-0'>
                        <h2 className='mb-4 text-4xl text-primary capitalize drop-shadow-xl font-bold'>We are car prts manufacrer.</h2>
                        <p className='text-xl leading-8 text-justify md:text-left'>Car Parts is a Professional Manfacturer Platform. Here we will provide you only interesting content, which you will like very much. center;We're dedicated to providing you the best of Manfacturer, with a focus on dependability and Manufacture car parts.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;