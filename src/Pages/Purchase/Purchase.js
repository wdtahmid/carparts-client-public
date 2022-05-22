
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../hookes/firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const params = useParams();
    const [parts, setParts] = useState();
    const id = params.id;
    const [formHide, setFormHide] = useState(false)

    useEffect(() => {
        const url = `http://localhost:5000/purchase/parts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setParts(data)
            })
    }, [id])

    const minimum = parts?.min;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = order => {

        order.partsName = parts?.name;
        order.unitPrice = parts?.price;

        fetch('http://localhost:5000/order', {
            'method': 'POST',
            'headers': {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                if (data.acknowledged) {
                    setFormHide(true);
                    toast.success('your order has been recieved!');
                }
            })
        console.log(order);
    };

    return (
        <div className='max-w-screen-xl mx-auto my-40'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-start items-center'>
                <div className=''><img src={parts?.image} alt="" /></div>
                <div className='flex flex-col gap-y-7'>
                    <h2 className='text-primary font-bold uppercase text-4xl'>{parts?.name}</h2>
                    <h2 className='font-bold capitalize text-2xl mt-2'>Price: ${parts?.price}/unit, <span className='text-info font-semibold'>Available: {parts?.quantity} unit</span></h2>

                    <label htmlFor="purchase" className="btn rounded-none modal-button btn-outline w-fit">Proceed To Purchase</label>
                    <input type="checkbox" id="purchase" className="modal-toggle" />

                    {formHide ? '' :
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="purchase" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold text-center my-4">Fill Your Details</h3>


                                <form className='flex flex-col px-6 pt-0 pb-0 gap-y-3 items-center' onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-control w-full">
                                        <input
                                            type='text'
                                            placeholder={user ? user.displayName : 'Your Name'}
                                            className='input input-bordered input-info w-full'
                                            value={user ? user.displayName : 'Your Name'}

                                            {...register("name")} />

                                    </div>
                                    <div className="form-control w-full">
                                        <input
                                            type='email'
                                            placeholder={user ? user.email : 'Your Email'}
                                            className='input input-bordered input-info w-full'
                                            value={user ? user.email : 'Your Name'}

                                            {...register("email")} />

                                    </div>
                                    <div className="form-control w-full">
                                        <input
                                            type='number'
                                            placeholder='Phone'
                                            className='input input-bordered input-info w-full'

                                            {...register("phone", { required: true })} />
                                        <label className="label">
                                            <span className="text-primary">{errors.phone?.type === 'required' && 'Phone is required'}</span>
                                        </label>
                                    </div>
                                    <div className="form-control w-full">
                                        <textarea
                                            placeholder='Address'
                                            className='textarea input-bordered input-info w-full'
                                            row='10'

                                            {...register("address", { required: true })} />
                                        <label className="label">
                                            <span className="text-primary">{errors.address?.type === 'required' && 'Phone is required'}</span>
                                        </label>
                                    </div>
                                    <div className="form-control w-full">
                                        <input
                                            type='number'
                                            placeholder={parts ? `Minimum Order Quantity ${parts?.min}` : 'Order Quantity'}
                                            className='input input-bordered input-info w-full'

                                            {...register("order", { required: true, min: `${minimum}`, max: `${parts?.quantity}` })} />
                                        <label className="label">
                                            <span className="text-primary">{errors.order?.type === 'required' && 'Order quantity is required'}</span>
                                            <span className="text-primary">{errors.order?.type === 'min' && `Minimum ${parts?.min} quantity is required`}</span>
                                            <span className="text-primary">{errors.order?.type === 'max' && `Maximum ${parts?.quantity} quantity is avaialble`}</span>
                                        </label>
                                    </div>

                                    <input className="btn btn-md btn-primary w-full" type="submit" value="complete the purchase" />
                                </form>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className='p-10'>
                <h2 className="text-2xl mb-10">Description:</h2>
                <p className='leading-7'>{parts?.description}</p>
            </div>
        </div>
    );
};

export default Purchase;