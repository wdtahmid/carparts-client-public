import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../hookes/firebase.init';
import axios from 'axios';

const Login = () => {


    const navigate = useNavigate();

    let location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

        signInWithEmailAndPassword(data.email, data.password);
        navigate(from, { replace: true });

        const user = {
            email: data.email
        }

        const response = await axios.put('https://cryptic-plateau-83425.herokuapp.com/upsertuser', user)
        if (response.data.accessToken) {
            localStorage.setItem('accessToken', response.data.accessToken);
            navigate(from, { replace: true });
        }

    };


    if (gloading || loading) {
        return <p>Please wait..</p>
    }
    if (guser || user) {
        navigate(from, { replace: true });
    }
    if (gerror || error) {
        // navigate(from, { replace: true });
    }

    return (
        <>
            <h2 className='text-3xl mb-10 mt-5 text-center text-primary'>{loading ? 'Loging in...' : 'Please Login'}</h2>
            <form className='flex flex-col px-6 pt-0 pb-0 gap-y-3 items-center' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full">
                    <input
                        type='email'
                        placeholder='Email'
                        className='input input-bordered input-info w-full'

                        {...register("email", { required: true })} />
                    <label className="label">
                        <span className="text-primary">{errors.email?.type === 'required' && 'Email is required'}</span>
                        <span className="text-primary">{error ? error.message : ''}</span>
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

                <input className="btn btn-md btn-primary w-full" type="submit" value="Sign In" />
            </form>
            <div className="flex flex-col w-full p-6 border-opacity-50">
                <div className="divider">OR</div>
                <button onClick={handleSignInWithGoogle} className="btn btn-outline btn-primary mt-4">Continue With Google</button>
            </div>
        </>
    );
};

export default Login;