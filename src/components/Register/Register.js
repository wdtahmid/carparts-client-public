import React from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { updateProfile } from "firebase/auth";
import auth from '../../hookes/firebase.init';
import axios from 'axios';

const Register = () => {


    let location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [signInWithGoogle, guser, gerror] = useSignInWithGoogle(auth);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile(auth.currentUser, { displayName: data.name });
        const response = await axios.put('https://cryptic-plateau-83425.herokuapp.com/upsertuser', data.email)
        if (response.data.accessToken) {
            localStorage.setItem('accessToken', response.data.accessToken);
            navigate(from, { replace: true });
        }
    };

    const handleSignInWithGoogle = async () => {

        await signInWithGoogle();

        /* const response = await axios.put('https://cryptic-plateau-83425.herokuapp.com/upsertuser', guser.email)
        if (response.data.accessToken) {
            localStorage.setItem('accessToken', response.data.accessToken);
            navigate(from, { replace: true });
        } */
    }
    if (error || gerror) {
        return <p>{error}</p>
    }

    if (user || guser) {
        navigate('/')
    }

    return (
        <>
            <h2 className='text-3xl mb-10 mt-5 text-center text-primary'>{loading ? 'Registering...' : 'Please Register'}</h2>
            <form className='flex flex-col px-6 pt-0 pb-0 gap-y-3 items-center' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full">
                    <input
                        type='text'
                        placeholder='Name'
                        className='input input-bordered input-info w-full'

                        {...register("name", { required: true })} />
                    <label className="label">
                        <span className="text-primary">{errors.name?.type === 'required' && 'Name is required'}</span>
                    </label>
                </div>
                <div className="form-control w-full">
                    <input
                        type='email'
                        placeholder='Email'
                        className='input input-bordered input-info w-full'

                        {...register("email", { required: true })} />

                    <label className="label">
                        <span className="text-primary">{errors.email?.type === 'required' && 'Email is required'}</span>
                    </label>

                </div>
                <div className="form-control w-full">
                    <input
                        type='password'
                        placeholder='Password'
                        className='input input-bordered input-info w-full'

                        {...register("password", { required: true })} />
                    <label className="label">
                        <span className="text-primary">{errors.password?.type === 'required' && 'Password is required'}</span>
                    </label>
                </div>

                <input className="btn btn-md btn-primary w-full" type="submit" value="Sign Up" />
            </form>
            <div className="flex flex-col w-full p-6 border-opacity-50">
                <div className="divider">OR</div>

                <button onClick={handleSignInWithGoogle} className="btn btn-outline btn-primary mt-4">Continue With Google</button>
            </div>


        </>
    );
};

export default Register;