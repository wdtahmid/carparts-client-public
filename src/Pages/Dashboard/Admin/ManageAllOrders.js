import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../hookes/firebase.init';
import { toast } from 'react-toastify';

const ManageAllOrders = () => {

    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const email = user.email;

    const url = `https://cryptic-plateau-83425.herokuapp.com/manageorders?email=${email}`;

    const { isLoading, error, data: orders, refetch } = useQuery('allOrders', () => fetch(url).then(res => {
        if (res.status === 401) {
            navigate('/dashboard')
        }
        return res.json();
    }));


    if (isLoading) return <p>Loading... Please wait...</p>
    if (error) return 'An error has occurred: ' + error.message;

    const handleDeleteOrder = (id, email) => {
        const url = `https://cryptic-plateau-83425.herokuapp.com/deleteorder?id=${id}&email=${email}`;
        fetch(url, {
            'method': 'DELETE',
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                if (data.deletedCount === 1) {
                    refetch();
                    toast.success("Order deleted successfully!")
                }
                console.log(data);
            })
    }
    const handleShiftOrder = (id, email) => {
        const url = `https://cryptic-plateau-83425.herokuapp.com/shifteorder?id=${id}&email=${email}`;
        fetch(url, {
            'method': 'PUT',
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount === 1) {
                    refetch();
                    toast.success("Order shifted successfully!")
                }
            })
    }

    console.log(orders);
    return (
        <div>
            <h2 className='text-3xl text-primary mt-3 uppercase font-semibold mb-4'>Manage Orders</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Parts Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Customer</th>
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

                                    {order.paid === true ? <button onClick={() => handleShiftOrder(order._id, email)} className="btn btn-green text-white rounded-none btn-xs">{order.shift === true ? 'Shipped' : 'Pending'}</button> :

                                        <>
                                            <button className="btn btn-info text-white rounded-none btn-xs">Unpaid</button>
                                            <button onClick={() => handleDeleteOrder(order._id, email)} className="btn btn-primary text-white rounded-none btn-xs">Cancel</button>
                                        </>
                                    }

                                </td>
                                <td>{order.email}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;