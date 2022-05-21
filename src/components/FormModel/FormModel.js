import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

const FormModel = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="car-parts-login-form" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                {toggle ? <Register /> : <Login />}
                <button onClick={() => setToggle(!toggle)}>{toggle ? 'Have an account? signin' : "Don't have an account? register"}</button>

            </div>
        </div >
    );
};

export default FormModel;