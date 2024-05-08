import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('/register', { username, password, email });
            console.log(response.data); // Handle successful registration response
            setMessage('Registration successful!');
            // Redirect user to login page or handle registration success
        } catch (error) {
            console.error('Registration failed:', error.response.data); // Handle registration failure
            setMessage('Registration failed: ' + error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <div>{message}</div>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
