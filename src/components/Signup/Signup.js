
import React from 'react';
import { useState } from "react";




const Signup = ({setStoredToken, onFormSwitch}) => {

 const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/v1/users", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        console.log(data);
        setStoredToken(data.jwt);
      });

    setUsername("");
    setEmail("");
    setPassword("");
  };



    return ( 
        <div className="auth-form-container">
            <h2>Signup</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={username} name="name" onChange={(e) => setUsername(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Sign Up</button>
        </form>
        <button className="link-btn" onClick={() => onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
       )
    };
 
export default Signup;

