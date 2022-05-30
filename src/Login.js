import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Helmet} from 'react-helmet';

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState([]);
  const [userid, setuserid] = useState("1234");

  const submitHandler = event => {
    event.preventDefault();

    const payload = {
      Email: email,
      Password: password
    };
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        sessionStorage.setItem('Email', data.data[0].Email);
        sessionStorage.setItem('UserId', data.data[0]._id);
        sessionStorage.setItem('Token', data.data[0].Token);
        sessionStorage.setItem('Name', data.data[0].Name);
        // console.log(data.data);
        // console.log(data.data[0]._id);
        // console.log(data.data.length);
        if (data.data.length > 0) {
          window.location.href = '/Home';
        }
      });
  };

 
  

  return (
    <div className="App">
      <div className="regform">
        <h1>Please Fill Up Form To Login Admin panel</h1>
        <div className="main">
          <form onSubmit={submitHandler}>
            <div className="mainformdiv">
              <h2>UserName</h2>
              <input type="text"
                name="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={event => setemail(event.target.value)} />
              <h2>Password</h2>
              <input type="text"
                name="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={event => setpassword(event.target.value)} />
              <br></br>
              <br></br>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>    
    </div>
  );
}

export default Login;
