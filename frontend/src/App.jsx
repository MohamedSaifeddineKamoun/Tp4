// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/login', { username, password });
            console.log(response.data); // Handle successful login response
            // Store session token or user ID securely
        } catch (error) {
            console.error('Login failed:', error.response.data); // Handle login failure
        }
    };

    return (
        <div>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
