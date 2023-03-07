import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch(
      'https://React-and-node-js-project-MERN-stack.chandrashekha42.repl.co/register',
      {
        method: 'post',
        body: JSON.stringify({ name, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    result = await result.json();
    console.log(result);
    localStorage.setItem('user', JSON.stringify(result));
    
    if (result) {
      navigate('/');
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="inputBox"
        placeholder="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="inputBox"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="appButton" type="button" onClick={collectData}>
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
