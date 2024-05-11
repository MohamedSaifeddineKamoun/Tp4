import { useState } from 'react';
import api from "../api/axiosConfig.js"
const Register = () => {
    const [username, setUserName] = useState('');
    //const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Validate form data
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Send request to server to create new user
        try {
            api.post('/register', {
                username: username,
                password: password
            })
                .then(function (response) {
                    console.log(response);
                    window.location.href = '/';
                })
                .catch(function (error) {
                    console.log(error);
                });
        }catch (error) {
            console.error(error)
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                your name:
                <input type="text" value={username} onChange={(event) => setUserName(event.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <label>
                Confirm Password:
                <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;