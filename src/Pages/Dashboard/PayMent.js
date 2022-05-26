import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L36OtJf5euCawVMukWy2LpicNTUPdvFTjDsnS7xua0AgCXC2RDF368r9j2lQ7PvNX1aCyHe2LJv6WdmyKpuWxEP00TdrzjRiU');

const PayMent = () => {
    const [data, setData] = useState({});
    const { id } = useParams();


    useEffect(() => {
        const url = `https://cryptic-plateau-83425.herokuapp.com/parts?id=${id}`;
        const getData = async () => {
            try {
                const response = await axios.get(url)
                console.log(response?.data);
                setData(response?.data);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, [id])



    return (
        <div>
            <div className='max-w-screen-xl mx-auto'><h2>Order Details</h2></div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <img src={data.image} className="max-w-sm rounded-lg shadow-2xl" alt='' /> */}
                    <div>
                        <h1 className="text-5xl font-bold">{data?.partsName}</h1>
                        <div className='max-w-screen-sm flex flex-col gap-y-5 bg-slate-200 p-10 shadow-md mt-10' >
                            <div className='w-full flex justify-between'>
                                <span>Order Quantity:</span>
                                <span>{data?.order}</span>
                            </div>
                            <div className='w-full flex justify-between'>
                                <span>Unit Price:</span>
                                <span>{data?.unitPrice}</span>
                            </div>
                            <div className='w-full flex justify-between border-t-2 border-primary'>
                                <span>Total Price:</span>
                                <span>${data?.order * data?.unitPrice}</span>
                            </div>

                            <div className="card w-full mx-auto bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <Elements stripe={stripePromise}>
                                        <CheckoutForm data={data} />
                                    </Elements>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default PayMent;