
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../hookes/firebase.init';

const AddAProduct = () => {
    const navigate = useNavigate();
    const [authUser] = useAuthState(auth);
    const email = authUser.email;

    const { register, handleSubmit, formState: { errors }, reset, getValues, setError } = useForm();

    const min = getValues("min");
    const quantity = getValues("quantity");


    const onSubmit = formData => {

        if (quantity > min) {
            fetch(`http://localhost:5000/addproduct?email=${email}`, {
                'method': 'POST',
                'headers': {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(res => {
                    if (res.status === 200) {
                        console.log(res.status);
                        toast.success("You have successfully added this product!")
                        reset();
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                })
        } else {
            setError("min", { type: 'custom', message: 'custom message' });
        }

    };
    const url = `http://localhost:5000/user?email=${email}`;

    const { isLoading } = useQuery('adminOrUser', () => fetch(url).then(res => {

        if (res.status === 401) {
            navigate('/dashboard')
        }
        return res.json();

    }));
    if (isLoading) { return <p>Loading...</p> }

    return (
        <div className='pl-6'>
            <h2 className='text-3xl text-primary mt-3 uppercase font-semibold mb-4'>Add Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4'>
                    <div className="form-control w-full">

                        <label className="label">
                            <span className="label-text-alt text-[16px]">Parts Name</span>
                        </label>

                        <input type="text"
                            {...register("name", { required: true })}
                            className="input input-bordered rounded-none border-info focus:outline-none w-full" />

                        <label className="label">
                            <span className="label-text-alt text-[16px] text-primary">{errors.name?.type === 'required' && "Name is required"}</span>
                        </label>
                    </div>
                    <div className="form-control w-full">

                        <label className="label">
                            <span className="label-text-alt text-[16px]">Parts Image Url</span>
                        </label>

                        <input type="text"
                            {...register("image", { required: true })}
                            className="input input-bordered rounded-none border-info focus:outline-none w-full" />

                        <label className="label">
                            <span className="label-text-alt text-[16px] text-primary">{errors.image?.type === 'required' && "Image is required"}</span>
                        </label>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4'>
                    <div className="form-control w-full">

                        <label className="label">
                            <span className="label-text-alt text-[16px]">Parts quantity greater then min</span>
                        </label>

                        <input type="number"
                            {...register("quantity", { required: true })}
                            className="input input-bordered rounded-none border-info focus:outline-none w-full" />

                        <label className="label">
                            <span className="label-text-alt text-[16px] text-primary">{errors.quantity?.type === 'required' && "Quantity is required"}</span>

                        </label>
                    </div>
                    <div className="form-control w-full">

                        <label className="label">
                            <span className="label-text-alt text-[16px]">Set min order quantity less then quantity</span>
                        </label>

                        <input type="number"
                            {...register("min", { required: true })}
                            className="input input-bordered rounded-none border-info focus:outline-none w-full"
                        />

                        <label className="label">
                            <span className="label-text-alt text-[16px] text-primary">{errors.min?.type === 'required' && "Min quantity is required"}</span>
                            <span className="label-text-alt text-[16px] text-primary">{errors.min?.type === 'custom' && "Min quantity is should be less then parts quantity"}</span>

                        </label>
                    </div>
                    <div className="form-control w-full">

                        <label className="label">
                            <span className="label-text-alt text-[16px]">Price Per Unit</span>
                        </label>

                        <input type="number"
                            {...register("price", { required: true })}
                            className="input input-bordered rounded-none border-info focus:outline-none w-full" />

                        <label className="label">
                            <span className="label-text-alt text-[16px] text-primary">{errors.price?.type === 'required' && "Price is required"}</span>
                        </label>
                    </div>
                </div>
                <div className="form-control w-full">

                    <label className="label">
                        <span className="label-text-alt text-[16px]">Parts Description</span>
                    </label>

                    <textarea type="text"
                        {...register("description", { required: true })}
                        className="input input-bordered rounded-none border-info focus:outline-none w-full"></textarea>
                    <label className="label">
                        <span className="label-text-alt text-[16px] text-primary">{errors.description?.type === 'required' && "Description is required"}</span>
                    </label>
                </div>
                <button
                    onClick={() => {
                        const minMax = getValues(["min", "quantity"]);
                    }}
                    type="submit"
                    className='btn btn-primary rounded-none shadow-lg mt-10'>Add This Product</button>

            </form>
        </div>
    );
};

export default AddAProduct;