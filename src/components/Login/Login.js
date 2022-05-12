import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {

    return (
        <div className='login mt-4'>
            <form>
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