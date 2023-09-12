import React,{useState} from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';
import Footer1 from '../footer1/Footer1';
import Footer2 from '../footer2/Footer2';
import Navbar1 from '../navbar1/Navbar1';
import Navbar2 from '../navbar2/Navbar2';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    phonenumber: ''
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'fullname') {
      // Validate full name (letters and spaces only)
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === 'phonenumber') {
      // Validate phone number (exactly 11 digits)
      if (/^\d{0,11}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    
    if (!formData.fullname) {
      validationErrors.fullname = 'Full Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullname)) {
      validationErrors.fullname = 'Only letters and spaces are allowed';
    }
    if (!formData.email) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }
    if (!formData.phonenumber) {
      validationErrors.phonenumber = "Phone number is required";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission or API call
      console.log("Form submitted:", formData);
    }
  };

  return (
    <>
    <Navbar1/>
    <Navbar2/>
    <div className="signup-page">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
  type="text"
  id="fullName"
  name="fullname" // Use "fullname" here
  value={formData.fullname}
  onChange={handleChange}
/>
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
  type="text"
  id="phoneNumber"
  name="phonenumber"  
  value={formData.phonenumber}
  onChange={handleChange}
/>

            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
          </div>
          <button type="submit" className="signup-btn" style={{backgroundColor:"#02b9b1"}}>
            Sign Up
          </button>
        </form>
        <div className="login-link">
          Already a member? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
    <Footer1/>
    <Footer2/>
    </>
  )
}

export default SignUp
