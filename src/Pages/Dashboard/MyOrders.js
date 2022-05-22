import { jsonEval } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth"
import auth from '../../hookes/firebase.init';
const MyOrders = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/myorders/${email}`;
        fetch(url)
            .then(res => {
                console.log(res);
                return res => jsonEval();
            })
            .then(data => {
                setOrders(data);
                console.log(data);
            })
    }, [email])
    console.log(orders);
    return (
        <div>
            <h2 className='text-3xl text-primary mt-3 uppercase font-semibold mb-4'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;