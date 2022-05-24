import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../hookes/firebase.init';

const MakeAdmin = () => {

    const [authUser] = useAuthState(auth);
    const email = authUser.email;

    const url = `http://localhost:5000/allusers?email=${email}`;

    const { isLoading, error, data: users, refetch } = useQuery('allUsers', () => fetch(url).then(res => res.json()));

    if (isLoading) return <p>Loading... Please wait...</p>
    if (error) return 'An error has occurred: ' + error.message;




    const handleMakeAdmin = (id, email) => {

        const url = `http://localhost:5000/makeadmin?id=${id}&email=${email}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    toast.success('Admin has been made successfully')
                }
            })
        
        refetch();
    }

    const handleRemoveAdmin = () => {

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
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ?
                                        <button onClick={() => handleRemoveAdmin(user._id, authUser.email)} className="btn btn-primary text-white rounded-none btn-xs">Remove Admin</button>
                                        :
                                        <button onClick={() => handleMakeAdmin(user._id, authUser.email)} className="btn btn-info text-white rounded-none btn-xs">Make Admin</button>}


                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default MakeAdmin;