
import React from 'react';
import { useState } from "react";
import "./Signup.css";




const Signup = ({setStoredToken, onFormSwitch}) => {

 const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState('')

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
          password,
          password_confirmation
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
    setPasswordConfirmation('');
  };



    return ( 
      <div className="signup">
      <span className="signupTitle">Signup</span>
      <form className="signupForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="username" id="name" name="name" />
          <label>Email</label>
          <input value={email} className="signupInput" type="text" placeholder="Enter email..."
           onChange={(e)=>setEmail(e.target.value)} id="email" name="email"
          />
          <label>Password</label>
          <input value={password} className="signupInput" type="password" placeholder="Enter password..."
           onChange={(e)=>setPassword(e.target.value)} id="password" name="password"
          />
          <label>Password Confirmation</label>
          <input value={password_confirmation} className="signupInput" type="password" placeholder="Confirm password..."
           onChange={(e)=>setPasswordConfirmation(e.target.value)} id="password_confirmation"  name="password_confirmation" 
          />
          <button className="signupButt" type="submit">Signup</button>
      </form>
  </div>
       )
    };
 
export default Signup;

