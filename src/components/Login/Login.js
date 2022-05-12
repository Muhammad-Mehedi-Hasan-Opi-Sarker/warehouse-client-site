import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      
    const handleSubmitLogin=event=>{
        event.preventDefault();
        const email =(event.target.email.value);
        const password =(event.target.password.value);
        signInWithEmailAndPassword(email,password);
    }
    if(user){
        navigate('/home')
    }
    return (
        <div className='login mt-4'>
            <form onSubmit={handleSubmitLogin}>
                <h1 style={{ color: '#ff5c00' }}>Login</h1>
                <input type="email" name="email" id="" placeholder='Enter Email' required /><br />
                <input type="password" name="password" id="" placeholder='Password' required /><br />
                <input style={{ backgroundColor: '#ff5c00', color: 'white', border: 'none', padding: '10px' }} type="submit" value="Submit" /> <br />
                <Link className='text-decoration-none' to={'/register'}>Register Please</Link>
            </form>
        </div>
    );
};

export default Login;