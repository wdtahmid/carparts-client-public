import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../hookes/firebase.init';
import { AtSymbolIcon, UserIcon } from '@heroicons/react/outline';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-3xl text-primary mt-3 uppercase font-semibold mb-4'>My Profile</h2>
            <div>
                <div className='flex flex-col gap-y-4'>
                    <h2 className='flex gap-x-3'><span><UserIcon className='w-6 h-6'></UserIcon></span> <span> {user?.displayName}</span></h2>
                    <h2 className='flex gap-x-3'><span><AtSymbolIcon className='w-6 h-6'></AtSymbolIcon></span> <span>{user?.email}</span> </h2>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;