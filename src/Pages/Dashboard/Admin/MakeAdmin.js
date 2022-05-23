import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../hookes/firebase.init';

const MakeAdmin = () => {
    const [user] = useAuthState(auth);
    const email = user.email;

    const url = `http://localhost:5000/allusers?email=${email}`;

    const { isLoading, error, data: users } = useQuery('allUsers', () => fetch(url).then(res => res.json()));

    if (isLoading) return <p>Loading... Please wait...</p>
    if (error) return 'An error has occurred: ' + error.message;


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
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button className="btn btn-info text-white rounded-none btn-xs">Make Admin</button></td>
                                <td> <button className="btn btn-primary text-white rounded-none btn-xs">Remove Admin</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default MakeAdmin;