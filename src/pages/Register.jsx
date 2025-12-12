import React from 'react';

const Register = () => {
    return (
        <div>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Register</legend>

            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Enter your name" />

            <label className="label">Email</label>
            <input type="text" className="input" placeholder="enter your email" />

            <label className="label">Password</label>
            <input type="text" className="input" placeholder="enter your password" />
            <label className="label">Confirm Password</label>
            <input type="text" className="input" placeholder="confirm your password" />
            </fieldset>
        </div>
    );
};

export default Register;