import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../hookes/firebase.init';

const MakeAdmin = () => {

    const navigate = useNavigate();
    const [authUser] = useAuthState(auth);
    const email = authUser.email;

    const url = `http://localhost:5000/allusers?email=${email}`;

    const { isLoading, error, data: users, refetch } = useQuery('allUsers', () => fetch(url).then(res => {
        if (res.status === 401) {
            navigate('/dashboard')
        }
        return res.json();
    }));



    if (isLoading) return <p>Loading... Please wait...</p>
    if (error) return 'An error has occurred: ' + error.message;

    const handleMakeAdmin = (id, email) => {

        const url = `http://localhost:5000/makeadmin?id=${id}&email=${email}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    refetch();
                    toast.success('Admin has been made successfully')
                }
            })
    }

    const handleRemoveAdmin = (id, email) => {
        const url = `http://localhost:5000/removeadmin?id=${id}&email=${email}`;

        async function getUser() {

            try {
                const response = await axios.get(url);
                if (response.data.modifiedCount === 1) {
                    refetch();
                    toast.success('Admin has been removed successfully')
                }

            } catch (error) {
                console.error(error);
            }
        }
        getUser()
    }


    return (

        <div>
            <h2 className='text-3xl text-primary mt-3 uppercase font-semibold mb-4'>Make Admin</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name} </td>
                                <td>{user.email}</td>
                                <td>{user.speciality === 'masterAdmin' ?
                                    <span className='text-primary'> {user.speciality === 'masterAdmin' ? 'Master Admin' : ''}</span>
                                    :
                                    <>

                                        {user.role === 'admin' ?


                                            <button disabled={user.email === authUser.email ? "disabled" : ''} onClick={() => handleRemoveAdmin(user._id, authUser.email)} className="btn btn-primary text-white rounded-none btn-xs ">{user.email === authUser.email ? <span className='text-primary'>LogedIn Admin</span> : 'Remove Admin'}</button>


                                            :
                                            <button onClick={() => handleMakeAdmin(user._id, authUser.email)} className="btn btn-info text-white rounded-none btn-xs">Make Admin</button>}
                                    </>

                                }</td>



                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );

};


export default MakeAdmin;