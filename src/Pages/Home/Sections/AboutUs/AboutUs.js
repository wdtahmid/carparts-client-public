import React from 'react';
import abbanner from '../../../../assets/images/abbanner.jpg'

const AboutUs = () => {

    const bannerBgImg = {
        'backgroundImage': `url(${abbanner})`
    }

    return (
        <div style={bannerBgImg} className='py-32 bg-slate-300 bg-cover'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
                    <div className='text-left p-10'>
                        <h2 className='text-4xl text-left uppercase text-primary font-bold mb-10'>About Us</h2>
                        <p className='text-info text-xl'>
                            Car Parts is a Professional Manfacturer Platform. Here we will provide you only interesting content, which you will like very much. center;We're dedicated to providing you the best of Manfacturer, with a focus on dependability and Manufacture car parts.
                        </p>
                        <button className='mt-10 btn shadow-md btn-primary rounded-none text-white'>More About Us</button>

                    </div>
                    <div className='text-left'>

                    </div>
                </div>

            </div>
        </div>

    )
};

export default AboutUs;