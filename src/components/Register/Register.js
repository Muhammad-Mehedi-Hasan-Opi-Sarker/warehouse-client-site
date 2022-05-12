import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
    const navigate = useNavigate();
    // code for create password and email 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    // below code for onsubmit

    const handleSubmit = event => {
        event.preventDefault();
        const email = (event.target.email.value);
        const password = (event.target.password.value);
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h1 style={{ color: '#ff5c00' }}>Register</h1><br />
                <input type="name" placeholder='Name' /><br />
                <input type="email" name="email" id="" placeholder='Enter Email' required /><br />
                <input type="password" name="password" id="" placeholder='Password' required /><br />
                <input style={{ backgroundColor: '#ff5c00', color: 'white', border: 'none', padding: '10px' }} type="submit" value="Submit" /> <br />
                <Link className='text-decoration-none' to={'/login'}>Login Please</Link>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;