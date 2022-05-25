
import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth"
import auth from '../../hookes/firebase.init';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const MyOrders = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/myorders?email=${email}`;
        const getMyOrdedrs = async () => {
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                }
            });
            setOrders(data);

        };
        getMyOrdedrs();
    }, [email])


    const handleDeleteOrder = (id) => {
        const url = `http://localhost:5000/deleteorder?id=${id}`;
        fetch(url, {
            'method': 'DELETE',
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                if (data.deletedCount === 1) {
                    //refetch();
                    toast.success("Order deleted successfully!")
                }
                console.log(data);
            })
    }


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
                            orders?.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.partsName}</td>
                                <td>{order.order}</td>
                                <td>${parseInt(order.order) * order.unitPrice}</td>
                                <td className='flex gap-x-2'>

                                    <button disabled={order.paid === true ? "disabled" : ""} className="btn btn-info text-white rounded-none btn-xs"><Link to={`/dashboard/payment/${order._id}`}>{order.paid === true ? "Paid" : "Pay"}</Link></button>

                                    <button onClick={() => handleDeleteOrder(order._id)} disabled={order.paid === true ? "disabled" : ""} className="btn btn-primary text-white rounded-none btn-xs">Cancel</button>

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