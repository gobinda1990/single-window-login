import React, { useState } from 'react';
import axios from 'axios';


export default function Login() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");


const handleLogin = () => {
axios.post("http://localhost:8080/login", { username, password })
.then(res => setMessage(res.data))
.catch(err => setMessage("Login Failed"));
};


return (
<div>
<h2>Login</h2>
<input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
<input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
<button onClick={handleLogin}>Login</button>
<p>{message}</p>
</div>
);
}