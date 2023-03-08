import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = ()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async ()=> {
    console.log(email, password);
    let result = await fetch('https://React-and-node-js-project-MERN-stack.chandrashekha42.repl.co/login', {
      method: 'post',
      body:JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
    if(result.name){
      localStorage.setItem('user', JSON.stringify(result));
      navigate('/');
    }else{
      alert("Please enter correct details");
    }
  }

  return(
    <div className='login'>
      <input
        type='text'
        className ='inputBox'
        placeholder ='Enter Email'
        value = {email}
        onChange = {(e)=> setEmail(e.target.value)}
      />

      <input 
        type = 'password'
        className = 'inputBox'
        placeholder = 'Enter Password'
        value = {password}
        onChange = {(e)=> setPassword(e.target.value)}
      />

      <button
        type = 'button'
        className = "appButton"
        onClick = {handleLogin} 
      >
        Login
      </button>
      
    </div>
  )
}

export default Login;