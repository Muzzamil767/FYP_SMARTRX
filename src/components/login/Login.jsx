import React,{useState} from 'react'
import './Login.css'
import { Link } from "react-router-dom";
import Navbar1 from '../navbar1/Navbar1';
import Navbar2 from '../navbar2/Navbar2';
import Footer1 from '../footer1/Footer1';
import Footer2 from '../footer2/Footer2';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const demoEmail = localStorage.getItem('demoEmail');
    const demoPassword = localStorage.getItem('demoPassword');

    if (email === demoEmail && password === demoPassword) {
      localStorage.setItem('loggedIn', 'true');
      // Redirect to the desired page after successful login
      // For example: history.push('/cart');
    } else {
      alert('Invalid email or password');
    }
  };
  return (
    <>
   <Navbar1/>
   <Navbar2/>
      <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input type="password" id="password" className='password1' value={password}
        onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
              <p className="forgot-password">Forgot Password?</p>
            </div>
          </div>
          <button className="login-btn" type="submit" onClick={handleLogin}>Login</button>
        </form>
        <p className="not-member">Not a member? <Link className="sign-up-link" to="/signUp">Sign up</Link></p>
      </div>
    </div>
    <Footer1/>
    <Footer2/>
    </>
  )
}

export default Login
