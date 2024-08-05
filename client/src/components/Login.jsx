import { Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import { userLogin } from '../../api/api';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill all the fields');
            return;
        }
        const data = {
            email,
            password
        };
        userLogin(data).then(()=>{console.log("done")
            navigate('/')
        })
    };

    return (
        <div className='login'>
            <div className='login-page'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input 
                        type='text' 
                        placeholder='Username' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    
                    <input 
                        type='password' 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button type='submit'>Login</button>
                </form>
                <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
            </div>
        </div>
    );
}
