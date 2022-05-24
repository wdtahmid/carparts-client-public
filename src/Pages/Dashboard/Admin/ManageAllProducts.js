import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../hookes/firebase.init';

const ManageAllProducts = () => {
    const [user] = useAuthState(auth);
    const email = user.email;

    const url = `http://localhost:5000/allproducts?email=${email}`;

    const { isLoading, error, data: products } = useQuery('allProducts', () => fetch(url).then(res => res.json()));

    if (isLoading) return <p>Loading... Please wait...</p>
    if (error) return 'An error has occurred: ' + error.message;

    console.log(products);
    return (
        <div>
            <h2 className='text-3xl text-primary mt-3 uppercase font-semibold mb-4'>Manage All Products</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) =>
                                <tr key={product._id}>
                                    <th>{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>${product.price} /Unit</td>
                                    <td>{product.quantity}</td>
                                    <td><button className="btn btn-primary text-white rounded-none btn-xs">delete</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllProducts;