import React, { useState } from 'react';
import './LoginUpdate.css';
import Footer1 from '../footer1/Footer1';
import Footer2 from '../footer2/Footer2';
import Navbar1 from '../navbar1/Navbar1';
import Navbar2 from '../navbar2/Navbar2';

const LoginUpdate = () => {
  const [formData, setFormData] = useState({
    fullName: '', // Corrected property name
    
    password: '',
    phoneNumber: '' // Corrected property name
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'fullName') {
      // Validate full name (letters and spaces only)
      if (/^[A-Za-z\s]*$/.test(value) || value === '') {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    
    if (!formData.fullName) {
      validationErrors.fullName = 'Full Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      validationErrors.fullName = 'Only letters and spaces are allowed';
    }
   
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }
    if (!formData.phoneNumber) {
      validationErrors.phoneNumber = 'Phone number is required';
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission or API call
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="signup-page">
        <div className="signup-container">
          <h1>Update Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
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
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <p className="error">{errors.phoneNumber}</p>
              )}
            </div>
            <button
              type="submit"
              className="signup-btn"
              style={{ backgroundColor: '#02b9b1' }}
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default LoginUpdate;
