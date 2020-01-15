import React from 'react';

const Register = () => {
    return (
        <div className="backdrop">
            <div className="register">
                <h2>Register for an account</h2>
                Email: <input type="text" /><br />
                Full name: <input type="text" /><br />
                Password: <input type="password" /><br />
                <button className="btn">Register</button>
            </div>
        </div>
    );
};

export default Register;