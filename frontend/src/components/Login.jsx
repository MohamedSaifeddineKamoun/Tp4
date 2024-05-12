import { useState } from 'react';
import  api from "../api/axiosConfig.js";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            api.post('/api/v1/login', {
                username: username,
                password: password
            })
                .then(function (response) {
                    console.log(response);
                    // Login successful, redirect to protected route
                   // window.location.href = '/';
                })
                .catch(function (error) {
                    console.log("there is an error" + error);
                });
        }catch (error) {
            console.error(error)
        }

    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Login</button>

            </form>
        </div>
    );
};

export default Login;