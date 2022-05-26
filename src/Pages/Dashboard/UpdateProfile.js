import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../hookes/firebase.init';
import { useForm } from "react-hook-form";

const UpdateProfile = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;

    const [updating, setUpdating] = useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = updatingForm => {

        fetch(`https://cryptic-plateau-83425.herokuapp.com/updateprofile?email=${email}`, {
            'method': 'PUT',
            'headers': {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatingForm)
        })
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(data => {
                console.log(data);
            })
        console.log(updatingForm);

        setUpdating(updatingForm);
    }




    const { isLoading, error, data: profileInfo } = useQuery('profileInfo', () => fetch(`https://cryptic-plateau-83425.herokuapp.com/profileinfo?email=${email}`).then(res => res.json()))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div className='p-5'>
            <h2 className='text-xl text-primary mt-3 capialize font-semibold mb-4'>Update Your Profile info</h2>

            <form className='flex flex-col gap-y-5' onSubmit={handleSubmit(onSubmit)}>
                <input
                    defaultValue={updating?.education ? updating?.education : profileInfo[0]?.education} {...register("educaion")}
                    type="text"
                    placeholder="Add your education"
                    className="input input-bordered rounded-none input-primary w-full max-w-xs" />

                <input
                    defaultValue={updating.location ? updating.location : profileInfo[0]?.location} {...register("location")}
                    type="text"
                    placeholder="Add your location"
                    className="input input-bordered rounded-none input-primary w-full max-w-xs" />

                <input
                    defaultValue={updating.phone ? updating.phone : profileInfo[0]?.phone} {...register("phone")}
                    type="text"
                    placeholder="Add your phone"
                    className="input input-bordered rounded-none input-primary w-full max-w-xs" />

                <input
                    defaultValue={updating.social ? updating.social : profileInfo[0]?.social} {...register("social")}
                    type="text"
                    placeholder="Add your social"
                    className="input input-bordered rounded-none input-primary w-full max-w-xs" />

                <textarea
                    defaultValue={updating?.bio ? updating?.bio : profileInfo[0]?.bio} {...register("bio")}
                    placeholder="Add your Bio"
                    className="input input-bordered rounded-none input-primary w-full max-w-xs"
                ></textarea>

                <input className='btn btn-default rounded-none w-fit' type="submit" value="Update Profile" />
            </form>
        </div>
    );
};

export default UpdateProfile;