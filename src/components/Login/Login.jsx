import React, { useState } from 'react';
import '../Login/Login.css';
import Navbar from "../MainPage/Navbar/Navbar";
import Footer from "../MainPage/Footer/Footer";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const handleReset = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            <Navbar />
            <div className="login-container">
                <h2>Login</h2>
                <div className="underline"></div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">
                            <FaUser className="fa-user" />
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
                            <FaLock className='fa-lock' />
                            Password:
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
                        </span>
                    </div>
                    <p className="forgot-password">Forgot password?</p>
                    <div className="button-group">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
