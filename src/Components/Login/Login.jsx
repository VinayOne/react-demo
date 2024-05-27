import React, { useState } from "react";
import './Login.css';
import Dashboard from "../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [errortxt, setErrortxt] = useState("");
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const users = [{ username: "vinay", password: "test12345" }];
    const handleSubmit = (e) => {
        e.preventDefault();
       // const errortxt = '';
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            setauthenticated(true)
            localStorage.setItem("authenticated", true);
            navigate("/dashboard");
        } else {
            setErrortxt("Username or Password is incorrect");
            setTimeout(() => {
                setErrortxt("");
            }, 3000)
        }
    };    
    return (
        <div className="container">
            <div className="form-container">
            <h1>Login</h1>
                <div className="form-group">
                    <input type="text" name="Username" value={username} placeholder="Username" onChange={(e) => setusername(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="password" name="Password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="button" onClick={handleSubmit}>Login</button>
                </div>
                <p>{errortxt}</p>
            </div>
        </div>
    )        
    
}

export default Login