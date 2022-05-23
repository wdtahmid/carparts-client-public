
import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth"
import auth from '../../hookes/firebase.init';
const MyOrders = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/myorders?email=${email}`;
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setOrders(data);
            })
    }, [email])
    return (
        <div>
            <h2 className='text-3xl text-primary mt-3 uppercase font-semibold mb-4'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Parts Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.partsName}</td>
                                <td>{order.order}</td>
                                <td>${parseInt(order.order) * order.unitPrice}</td>
                                <td className='flex gap-x-2'>
                                    <button class="btn btn-info text-white rounded-none btn-xs">Pay</button>
                                    <button class="btn btn-primary text-white rounded-none btn-xs">Cancel</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;