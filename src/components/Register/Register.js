import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Register = () => {
    const navigate = useNavigate();
    // code for create password and email 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      // below code for onsubmit

    const handleSubmit =event=>{
        event.preventDefault();
        const email = (event.target.email.value);
        const password = (event.target.password.value);
        createUserWithEmailAndPassword(email,password)
        navigate('/home')
    }

    
    return (
        <div className='login mt-4'>
            <form onSubmit={handleSubmit}>
                <h1 style={{ color: '#ff5c00' }}>Register</h1><br />
                <input type="name" placeholder='Name' /><br />
                <input type="email" name="email" id="" placeholder='Enter Email' required /><br />
                <input type="password" name="password" id="" placeholder='Password' required /><br />
                <input style={{ backgroundColor: '#ff5c00', color: 'white', border: 'none', padding: '10px' }} type="submit" value="Submit" /> <br />
                <Link className='text-decoration-none' to={'/login'}>Login Please</Link>
            </form>
        </div>
    );
};

export default Register;