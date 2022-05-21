import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <h2>Please Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", { required: true })}
                    />
                    <label className="label">
                        <span className="label-text-alt">{errors.name?.type === 'required' && "Name is required"}</span>
                    </label>
                </div>
            </form>


        </>
    );
};

export default Register;