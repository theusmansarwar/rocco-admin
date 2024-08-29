import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './Login.css';

const Login =({onLoginSuccess})=>{
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleLogin = (e) => {
  e.preventDefault();
  if (email === 'admin@gmail.com' && password === 'admin@123') {
    onLoginSuccess(); 
    localStorage.setItem('login', 'true');
  } else {
    alert('Invalid email or password');
  }
}
  return (
    <div className='login-form'>
      <form onSubmit={handleLogin}>
        <h4>SIGN IN to Admin</h4>
        <p>Welcome! Log into your account</p>
        <div className='input-div'>
          <lable>Email</lable>  <br />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='input-div'>
          <lable>PASSWORD</lable><br />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button className='login-button' type='submit' >LOGIN</button>
      
      </form>
     
    </div>
  )
}
export default Login