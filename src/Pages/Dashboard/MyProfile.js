import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../hookes/firebase.init';
import { AtSymbolIcon, LocationMarkerIcon, PhoneIcon, UserIcon } from '@heroicons/react/outline';
import { useQuery } from 'react-query';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;

    const { isLoading, error, data } = useQuery('profileInfo', () => fetch(`http://localhost:5000/profileinfo?email=${email}`).then(res => res.json()))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message;

    const facebook = data[0]?.social;
    const socialWebsite = facebook?.split('.')[1];
    const socialLogo = socialWebsite?.slice()[0]
    console.log(socialWebsite);



    return (
        <div>
            <h2 className='text-3xl text-primary mt-3 uppercase font-semibold mb-4'>My Profile</h2>
            <div className="hero bg-base-200">
                <div className="hero-content items-start justify-start w-full gap-10 flex-col md:flex-row">
                    <img src={data[0]?.image ? data[0].image : 'https://via.placeholder.com/150'} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='flex flex-col gap-y-4'>
                        <h2 className='flex gap-x-3'><span><UserIcon className='w-6 h-6'></UserIcon></span> <span> {user?.displayName}</span></h2>
                        <h2 className='flex gap-x-3'><span><AtSymbolIcon className='w-6 h-6'></AtSymbolIcon></span> <span>{user?.email}</span> </h2>
                        <h2 className='flex gap-x-3'><span><LocationMarkerIcon className='w-6 h-6'></LocationMarkerIcon></span> <span>{data[0]?.location}</span></h2>
                        <h2 className='flex gap-x-3'><span><PhoneIcon className='w-6 h-6'></PhoneIcon></span> <span>{data[0]?.phone}</span></h2>
                        <h2 className='flex gap-x-3'>
                            <span className='h-6 w-6 text-center leading-5 border border-black rounded-full'>{socialLogo}</span>
                            <a className='capitalize' href={facebook} rel="noopener noreferrer">{socialWebsite}</a>
                        </h2>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <p>{data[0]?.bio}</p>
            </div>
        </div >
    );
};

export default MyProfile;