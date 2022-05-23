import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { updateProfile } from "firebase/auth";
import auth from '../../hookes/firebase.init';

const Register = () => {

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile(auth.currentUser, { displayName: data.name });

        const user = {
            name: data.name,
            email: data.email
        }
        fetch('http://localhost:5000/upsertuser', {
            'method': 'PUT',
            'headers': {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
    };


    if (error) {
        return <p>{error.message}</p>
    }

    if (user) {
        navigate('/')
    } return (
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
                <button className="btn btn-outline btn-primary mt-4">Continue With Google</button>
            </div>


        </>
    );
};

export default Register;