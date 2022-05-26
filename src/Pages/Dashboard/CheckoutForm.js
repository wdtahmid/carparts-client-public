import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutForm = ({ data }) => {
    console.log(data);
    const { price, name, email, _id } = data || {};
    console.log(price);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transectionId, setTransectionId] = useState('');

    const [clientSecret, setClientSecret] = useState("");
    /*  const price = parseInt(order) * parseInt(unitPrice); */





    useEffect(() => {
        const postPayment = async () => {
            try {
                const response = await axios.post('https://cryptic-plateau-83425.herokuapp.com/create-payment-intent', {
                    price: 100 //parseInt(price),
                })
                if (response.data.clientSecret) {
                    console.log(response.data.clientSecret);
                    setClientSecret(response.data.clientSecret);
                }
            } catch (error) {
                console.error(error);
            }
        }
        postPayment();

    }, [price])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess('');
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { cardError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (cardError) {
            setCardError(cardError.message)
        } else {
            setCardError(' ')
            setTransectionId(paymentMethod.id);
        }

        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
        } else {
            console.log(paymentIntent);
            setTransectionId(paymentIntent.id)
            console.log(transectionId);
            setSuccess('Your payment is successful');

            const paymentInfo = {
                transectionId: paymentIntent.id
            }

            fetch(`https://cryptic-plateau-83425.herokuapp.com/paidorder/${_id}`, {
                'method': 'PUT',
                'headers': {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    if (data.modifiedCount === 1) {
                        toast.success('Database successfully with this payment!')
                    }
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm uppercase rounded-none text-white btn-info mt-5 hover:bg-primary hover:border-primary" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className='text-primary'>{cardError}</p>
            {success && <p className='text-green'>{success}</p>}
        </>
    );
};

export default CheckoutForm;