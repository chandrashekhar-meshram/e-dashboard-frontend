import React, {useState} from 'react';

const Login = ()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = ()=> {
    console.log(email, password);
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