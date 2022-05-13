import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //   code for error show
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    //   submit login file 

    const handleSubmitLogin = event => {
        event.preventDefault();
        const email = (event.target.email.value);
        const password = (event.target.password.value);
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='login'>
            <form onSubmit={handleSubmitLogin}>
                <h1 style={{ color: '#ff5c00' }}>Login</h1>
                <input type="email" name="email" id="" placeholder='Enter Email' required /><br />
                <input type="password" name="password" id="" placeholder='Password' required /><br />
                <input style={{ backgroundColor: '#ff5c00', color: 'white', border: 'none', padding: '10px' }} type="submit" value="Submit" /> <br />
                {errorElement}
                <Link className='text-decoration-none' to={'/register'}>Register Please</Link>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;