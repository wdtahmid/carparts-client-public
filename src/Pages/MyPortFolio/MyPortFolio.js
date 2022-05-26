import { AcademicCapIcon, BadgeCheckIcon, LinkIcon } from '@heroicons/react/outline';
import React from 'react';

const MyPortFolio = () => {
    return (
        <>
            <div className='my-14'>
                <div className='max-w-screen-md mx-auto'>
                    <div className='flex flex-row-reverse md:flex-row justify-between items-end border-b-2 border-b-primary'>
                        <div>
                            <h2 className='text-3xl text-default'>Tahmid Hasan</h2>
                            <p>Full Stcak Web Developer</p>
                        </div>
                        <div>
                            <img src={'https://via.placeholder.com/250'} alt="" />
                        </div>
                    </div>
                    <p className='card shadow-md p-10 text-black'>Hi, there you are welcome! It is Tahmid Hasan. Please, you have need to know something about me. That's not it? I love people like you who are reading about me. My hoby is coding and make people happy with my best.</p>
                    <div className='card shadow-md p-10'>
                        <h3 className='text-primary text-3xl text-left mb-7 '>Education</h3>
                        <p className='text-black text-xl font-semibold'>Here is my little journy of education.</p>
                        <ul class="menu bg-base-100 w-56 p-2 rounded-box">

                            <li>
                                <p><AcademicCapIcon className='h-5 w-5'></AcademicCapIcon> SSC-2006</p>
                            </li>
                            <li>
                                <p><AcademicCapIcon className='h-5 w-5'></AcademicCapIcon> HSC-2008</p>
                            </li>
                            <li>
                                <p><AcademicCapIcon className='h-5 w-5'></AcademicCapIcon> B.Com-2013</p>
                            </li>
                        </ul>
                    </div>
                    <div className='card shadow-md p-10'>
                        <h3 className='text-primary text-3xl text-left mb-7 '>Skills</h3>
                        <p className='text-black text-xl font-semibold'>I'm experinced with some important skills that are bellow:</p>
                        <ul class="menu hover:bg-transparent bg-transparent w-56 p-2">

                            <li>
                                <p><BadgeCheckIcon className='h-5 w-5'></BadgeCheckIcon> Html</p>
                            </li>
                            <li>
                                <p><BadgeCheckIcon className='h-5 w-5'></BadgeCheckIcon> CSS/CSS3/Bootstrap/Tailwind</p>
                            </li>
                            <li>
                                <p><BadgeCheckIcon className='h-5 w-5'></BadgeCheckIcon> Javascript / NodeJs</p>
                            </li>
                            <li>
                                <p><BadgeCheckIcon className='h-5 w-5'></BadgeCheckIcon> React Web</p>
                            </li>
                            <li>
                                <p><BadgeCheckIcon className='h-5 w-5'></BadgeCheckIcon> MongoDb</p>
                            </li>
                            <li>
                                <p><BadgeCheckIcon className='h-5 w-5'></BadgeCheckIcon> ExpressJs</p>
                            </li>
                            <li>
                                <p><BadgeCheckIcon className='h-5 w-5'></BadgeCheckIcon> Firebase</p>
                            </li>
                            <li>
                                <p><BadgeCheckIcon className='h-5 w-5'></BadgeCheckIcon> Heroku</p>
                            </li>
                            <li>
                                <p><BadgeCheckIcon className='h-5 w-5'></BadgeCheckIcon> Payment / Stripe</p>
                            </li>
                            <li>
                                <p><BadgeCheckIcon className='h-5 w-5'></BadgeCheckIcon> WordPress</p>
                            </li>
                        </ul>
                    </div>
                    <div className='card shadow-md p-10'>
                        <h3 className='text-primary text-3xl text-left mb-7 '>Portfolio</h3>
                        <p className='text-black text-xl font-semibold'>Visit my portfolio items you may love.</p>
                        <ul class="menu bg-base-100 w-full p-2 rounded-box">

                            <li>
                                <a className='text-md font-semibold' href='https://wdtahmid.github.io/influencer-gear'> <LinkIcon className='w-5 h-5'></LinkIcon> Influnecer Products using - Html | CSS | FlexBox</a>
                            </li>
                            <li>
                                <a className='text-md font-semibold' href='https://tahia-event-land.netlify.app/'> <LinkIcon className='w-5 h-5'></LinkIcon>Influnecer Tahiya Event Landing - Html | CSS | Bootstrap</a>
                            </li>
                            <li>
                                <a className='text-md font-semibold' href='https://warehouse-client-adf9b.web.app'> <LinkIcon className='w-5 h-5'></LinkIcon>Influnecer Smart Phone Warehouse - React | Tailwind | Heroku | Firebase</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyPortFolio;