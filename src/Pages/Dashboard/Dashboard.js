import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto'>

                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        <h2 className='text-4xl text-info mt-3'>Dahsboard</h2>
                        <Outlet />
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                            <li><Link to='/dashboard/myreviews'>My Reviews</Link></li>
                            <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;