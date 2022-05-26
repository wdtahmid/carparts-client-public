import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../hookes/firebase.init';

const ManageAllProducts = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const email = user.email;

    const url = `https://cryptic-plateau-83425.herokuapp.com/allproducts?email=${email}`;

    const { isLoading, error, data: products, refetch } = useQuery('allProducts', () => fetch(url).then(res => {
        if (res.status === 401) {
            navigate('/dashboard')
        }
        return res.json();
    }));

    if (isLoading) return <p>Loading... Please wait...</p>
    if (error) return 'An error has occurred: ' + error.message;

    const handleDeleteProduct = (id, email) => {

        const confirmDelete = window.confirm("Do you want to delete this parts?");

        if (confirmDelete) {
            const url = `https://cryptic-plateau-83425.herokuapp.com/deleteproduct?id=${id}&email=${email}`;

            async function productDelete() {
                try {
                    const response = await axios.delete(url)

                    if (response.data.deletedCount === 1) {
                        refetch();
                        toast.warning('The parts has been deleted!')
                    }

                } catch (error) {
                    console.log(error)
                }
            }
            productDelete();
        }


    }
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
                                    <td><button onClick={() => handleDeleteProduct(product._id, email)} className="btn btn-primary text-white rounded-none btn-xs">delete</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllProducts;