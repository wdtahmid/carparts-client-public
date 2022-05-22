import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../../assets/images/banner/banner1.png'
import bannerBg from '../../../assets/images/banner/bannerbg.jpg';
import ring from '../../../assets/images/banner/ring.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    const bannerBgImg = {
        'backgroundImage': `url(${bannerBg})`
    }
    return (
        <Swiper style={bannerBgImg}
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
        >
            <SwiperSlide>
                <div className='md:px-0 p-10 min-h-[450px] md:min-h-[650px] max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-around md:justify-between items-center text-center'>
                    <div className='w-[100%] md:w-[60%] md:text-left'>
                        <h2 className='text-5xl leading-[60px] uppercase font-semibold text-primary'>Replacement <br />steering wheel</h2>
                        <button className='btn btn-secondary rounded-none text-white mt-10 md:mt-20'>Shop Now</button>
                    </div>
                    <div className='w-[100%] md:w-[40%]'>
                        <img src={banner1} className='w-full' alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='md:px-0 p-10 min-h-[450px] md:min-h-[650px] max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-around md:justify-between items-center text-center'>
                    <div className='w-[100%] md:w-[60%] md:text-left'>
                        <h2 className='text-5xl leading-[60px] uppercase font-semibold text-primary'>Replacement <br />steering wheel</h2>
                        <button className='btn btn-secondary rounded-none text-white mt-10 md:mt-20'>Shop Now</button>
                    </div>
                    <div className='w-[100%] md:w-[40%]'>
                        <img src={ring} className='w-full' alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='md:px-0 p-10 min-h-[450px] md:min-h-[650px] max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-around md:justify-between items-center text-center'>
                    <div className='w-[100%] md:w-[60%] md:text-left'>
                        <h2 className='text-5xl leading-[60px] uppercase font-semibold text-primary'>Replacement <br />steering wheel</h2>
                        <button className='btn btn-secondary rounded-none text-white mt-10 md:mt-20'>Shop Now</button>
                    </div>
                    <div className='w-[100%] md:w-[40%]'>
                        <img src={banner1} className='w-full' alt="" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    );
};

export default Banner;