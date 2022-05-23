import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../hookes/firebase.init';
import { useQuery } from 'react-query';

const Dashboard = () => {
    const location = useLocation();
    const [user] = useAuthState(auth);
    const email = user.email;
    const url = `http://localhost:5000/user?email=${email}`;

    const { isLoading, error, data } = useQuery('adminOrUser', () => fetch(url).then(res => res.json()))

    if (isLoading) return <p>Loading... Please wait...</p>
    if (error) return 'An error has occurred: ' + error.message;

    const admin = data.role;


    const pathName = location.pathname;
    const dashboardPath = '/dashboard';
    const dashboardPage = pathName === dashboardPath;
    return (
        <div>
            <div className='max-w-screen-xl mx-auto'>
                <div className="drawer drawer-mobile">
                    <input id="dashboard" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <label htmlFor="dashboard" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        <h2 className='text-4xl text-info mt-3'>{dashboardPage ? 'Dahsboard' : ''}</h2>
                        <Outlet />
                    </div>

                    <div className="drawer-side">

                        <label htmlFor="dashboard" className="drawer-overlay"></label>

                        <ul className="menu gap-y-4 p-4 mr-12 overflow-y-auto w-64 bg-base-100 text-base-content">

                            {admin ?
                                <>
                                    <li className='rounded-none'><Link to='/dashboard/manageorders'>Manage Orders</Link></li>
                                    <li className='rounded-none'><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
                                    <li className='rounded-none'><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                                    <li className='rounded-none'><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
                                </>
                                :
                                <>
                                    <li className='rounded-none'><Link to='/dashboard/myorders'>My Orders</Link></li>

                                    <li><Link to='/dashboard/addreview'>Add A Review</Link></li>
                                </>
                            }
                            <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                            {admin ?
                                ' '
                                :
                                <div className="dropdown dropdown-hover">

                                    <label tabIndex="0" className="w-56 btn bg-primary border-0 rounded-none text-white">Add/Update Profile</label>
                                    <ul tabIndex="0" className="dropdown-content gap-y-4 menu p-2 shadow bg-base-100 rounded-box w-56">

                                        <li><Link to='/dashboard/myprofile/addtoprofile'>Add To Profile</Link></li>

                                        <li><Link to='/dashboard/myprofile/updateprofile'>Update Profile</Link></li>
                                    </ul>
                                </div>
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;