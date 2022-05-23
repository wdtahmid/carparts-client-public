import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='pl-6'>
            <h2 className='text-3xl text-primary mt-3 uppercase font-semibold mb-4'>Add Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>



                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4'>
                    <div className="form-control w-full">

                        <label className="label">
                            <span className="label-text-alt">Parts Name</span>
                        </label>

                        <input type="text"
                            {...register("name", { required: true })}
                            className="input input-bordered rounded-none border-info focus:outline-none w-full" />

                        <label className="label">
                            <span className="label-text-alt">{errors.name?.type === 'required' && "Name is required"}</span>
                        </label>
                    </div>
                    <div className="form-control w-full">

                        <label className="label">
                            <span className="label-text-alt">Parts Image Url</span>
                        </label>

                        <input type="text"
                            {...register("image", { required: true })}
                            className="input input-bordered rounded-none border-info focus:outline-none w-full" />

                        <label className="label">
                            <span className="label-text-alt">{errors.image?.type === 'required' && "Image is required"}</span>
                        </label>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4'>
                    <div className="form-control w-full">

                        <label className="label">
                            <span className="label-text-alt">Parts Quantity</span>
                        </label>

                        <input type="number"
                            {...register("quantity", { required: true })}
                            className="input input-bordered rounded-none border-info focus:outline-none w-full" />

                        <label className="label">
                            <span className="label-text-alt">{errors.quantity?.type === 'required' && "Quantity is required"}</span>
                        </label>
                    </div>
                    <div className="form-control w-full">

                        <label className="label">
                            <span className="label-text-alt">Set Min Order Quantity</span>
                        </label>

                        <input type="number"
                            {...register("min", { required: true })}
                            className="input input-bordered rounded-none border-info focus:outline-none w-full" />

                        <label className="label">
                            <span className="label-text-alt">{errors.quantity?.type === 'required' && "Min quantity is required"}</span>
                        </label>
                    </div>
                    <div className="form-control w-full">

                        <label className="label">
                            <span className="label-text-alt">Price Per Unit</span>
                        </label>

                        <input type="number"
                            {...register("price", { required: true })}
                            className="input input-bordered rounded-none border-info focus:outline-none w-full" />

                        <label className="label">
                            <span className="label-text-alt">{errors.price?.type === 'required' && "Price is required"}</span>
                        </label>
                    </div>
                </div>
                <div className="form-control w-full">

                    <label className="label">
                        <span className="label-text-alt">Parts Description</span>
                    </label>

                    <textarea type="text"
                        {...register("description", { required: true })}
                        className="input input-bordered rounded-none border-info focus:outline-none w-full"></textarea>
                    <label className="label">
                        <span className="label-text-alt">{errors.description?.type === 'required' && "Description is required"}</span>
                    </label>
                </div>
                <input className='btn btn-primary rounded-none shadow-lg mt-10' type="submit" value="Add This Product" />
            </form>
        </div>
    );
};

export default AddAProduct;