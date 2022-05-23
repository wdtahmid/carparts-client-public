import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
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
                            <li className='rounded-none'><Link to='/dashboard/myorders'>My Orders</Link></li>
                            <li><Link to='/dashboard/addreview'>Add A Review</Link></li>
                            <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                            <div class="dropdown dropdown-hover">
                                <label tabindex="0" class="w-56 btn bg-primary border-0 rounded-none text-white">Add/Update Profile</label>
                                <ul tabindex="0" class="dropdown-content gap-y-4 menu p-2 shadow bg-base-100 rounded-box w-56">
                                    <li><Link to='/dashboard/myprofile/addtoprofile'>Add To Profile</Link></li>
                                    <li><Link to='/dashboard/myprofile/updateprofile'>Add To Profile</Link></li>

                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;