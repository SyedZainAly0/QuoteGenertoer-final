import React, { useState } from 'react';
import "./LoginSignup.css";

const LoginSignup = ({ onSignIn }) => {
    const [action, setAction] = useState("Sign Up");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = () => {
        const user = { name, email, password };
        localStorage.setItem("user", JSON.stringify(user));
        setMessage("Signup successful. Please login.");
        setAction("Login");
        setName("");
        setEmail("");
        setPassword("");
    };

    const handleLogin = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.email === email && user.password === password) {
            onSignIn();
            setMessage(`Welcome back, ${user.name}!`);
        } else {
            setMessage("Invalid credentials. Please try again.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (action === "Sign Up") {
            handleSignup();
        } else {
            handleLogin();
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <form className='inputs' onSubmit={handleSubmit}>
                {action === "Login" ? null : (
                    <div className="input">
                        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                )}
                <div className="input">
                    <input type="email" placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input">
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {action === "Sign Up" ? null : (
                    <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
                )}
                <div className="submit-container">
                    <button type="submit" className="submit">{action}</button>
                    <button type="button" className="submit gray" onClick={() => setAction(action === "Sign Up" ? "Login" : "Sign Up")}>
                        {action === "Sign Up" ? "Login" : "Sign Up"}
                    </button>
                </div>
            </form>
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default LoginSignup;
