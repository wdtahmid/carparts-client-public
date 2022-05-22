import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

const FormModel = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="modal" >
            <div className="modal-box relative">
                <label htmlFor="car-parts-login-form" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                {toggle ? <Register /> : <Login />}
                <button className='text-center w-full text-success' onClick={() => setToggle(!toggle)}>{toggle ? 'Have an account? Login' : "Don't have an account? Register"}</button>
            </div>
        </div >
    );
};

export default FormModel;