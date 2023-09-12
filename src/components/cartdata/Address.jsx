import React, { useState } from 'react';
import './Address.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import {
  faArrowLeft,
  faPlus,
  faHome,
  faEnvelope,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Navbar1 from '../navbar1/Navbar1';
import Navbar2 from '../navbar2/Navbar2';
import Footer1 from '../footer1/Footer1';
import Footer2 from '../footer2/Footer2';

const Address = () => {
  const navigateTo = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    home: '',
    mobile: '',
    email: '',
  });
  const [validForm, setValidForm] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  
    console.log("Input change:", name, value);
  
    // Call handleValidation after each input change to update validForm state
    handleValidation();
  };

  
const handleValidation = () => {
  const { home, mobile, email } = shippingAddress;
  if (home.trim() !== '' && mobile.trim() !== '' && email.trim() !== '') {
    setFormComplete(true);
  } else {
    setFormComplete(false);
  }

  console.log("Form complete:", formComplete);
};
const handleProceed = (event) => {
  if (!formComplete) {
    event.preventDefault(); // Prevent the default behavior of the button click
    // Optionally, show an error message or perform a different action
    alert("Please fill in all fields before proceeding.");
  } else {
    // Allow the button click to proceed as usual
    navigateTo('/payment')
  }
};

  return (
    <>
    <Navbar1/>
    <Navbar2/>
      <div className='container'>
        <Link to="/cart"><div className='d-flex' style={{ color: 'blue', fontSize: 'larger' }}>
        
          <FontAwesomeIcon icon={faArrowLeft} />
          <h6 style={{ marginLeft: '10px', fontSize: 'large' }}>
            Back to Cart
          </h6>
         
        </div> </Link>
        <h1>CheckOut</h1>
        <div className='row'>
          <div className='col-lg-8 col-sm-12 col-md-12'>
            <div className='address-main'>
              <div className='row'>
                <div className='col-lg-9 col-sm-9'>
                  <h4>Shipping Address</h4>
                </div>
                <div
                  className='col-lg-3 col-sm-3 d-flex'
                  style={{ marginTop: '20px', color: 'blue' }}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ marginTop: '15px', marginRight: '10px' }}
                  />
                  <p style={{ color: 'blue' }}>Add Address</p>
                </div>
              </div>
              <hr />
              <ul className='address-list'>
                <li>
                  <FontAwesomeIcon icon={faHome} />
                  <input
                    type='text'
                    name='home'
                    value={shippingAddress.home}
                    onChange={handleInputChange}
                    onBlur={handleValidation}
                    required
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    style={{ fontSize: '20px' }}
                    icon={faMobile}
                  />
                  <input
                    type='number'
                    name='mobile'
                    value={shippingAddress.mobile}
                    onChange={handleInputChange}
                    onBlur={handleValidation}
                    required
                  />
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input
                    type='email'
                    name='email'
                    value={shippingAddress.email}
                    onChange={handleInputChange}
                    onBlur={handleValidation}
                    required
                  />
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div className='col-lg-4 col-sm-12 col-md-12'>
            <div className='address-right'>
              <h5>How to Upload Your Prescription?</h5>
              <div>
                <p>
                  Do not crop out any part of the prescription image. Avoid
                  unclear or blurred image of your prescription. Include
                  details of your doctor, patient and clinic visit date.
                </p>
                <p>Medicines will only be dispensed against a valid prescription.</p>
              </div>
            </div>
            <Link to="/payment">
  <button className="btn address-proceed" onClick={handleProceed}>
    Proceed
  </button>
</Link>
          </div>
        </div>
      </div>
      <Footer1/>
      <Footer2/>
    </>
  );
};

export default Address;
