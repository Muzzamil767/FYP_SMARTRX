import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar1 from './components/navbar1/Navbar1';
import Navbar2 from './components/navbar2/Navbar2';
import { Route, Routes,useLocation ,Navigate} from 'react-router-dom';
import Home from './components/home/Home'
//import Medicine from './components/medicine/Medicine'
//import PersnolCare from './components/persnol_care/PersnolCare'
//import Baby_essential from './components/baby_care/Baby_essential'
//import Baby_bath from './components/baby_care/Baby_bath'
//import Health_Devices from './components/health_devices/Health_devices'
import Footer1 from './components/footer1/Footer1'
import Footer2 from './components/footer2/Footer2';
import Products from './components/products/Products';
import ContactUs from './components/contactus/ContactUs';
import Aboutus from './components/aboutus/Aboutus';
import Login from './components/login/Login';
import Address from './components/cartdata/Address';
import Payment from './components/cartdata/Payment';
import Prescription from './components/cartdata/Prescription';
import SignUp from './components/signup/SignUp';
import LoginUpdate from './components/loginupdate/LoginUpdate';
import products from './components/products/ProductData'
import ProductInfo from './components/products/ProductInfo'
import Appointment from './components/appointment/Appointment';
import Cart from './components/cartdata/Cart';
import CardEnd from './components/cartdata/CardEnd';
import AdminMain from './components/adminSide/AdminMain';
import AdminProduct from './components/adminSide/AdminProduct';
import AdminCustomer from './components/adminSide/AdminCustomer';
import AdminNavbar from './components/adminSide/AdminNavbar';
import { BrowserRouter } from 'react-router-dom';



function App() {
 
  
  return (
    
    <>
    
    
        
          
        
       
      
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products data={products} />} />
          <Route path="productInfo" element={<ProductInfo />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="aboutUs" element={<Aboutus />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="cart" element={<Cart />} />
          <Route path="address" element={<Address />} />
          <Route path="payment" element={<Payment />} />
          <Route path="prescription" element={<Prescription />} />
          <Route path="cardEnd" element={<CardEnd />} />
          <Route path="loginUpdate" element={<LoginUpdate />} />

         <Route path='adminMain' element={<AdminMain/>}/>
            <Route path="adminProduct" element={<AdminProduct />} />
            <Route path="adminCustomer" element={<AdminCustomer />} />
          
        </Routes>
     
      
    </>
  );
}

export default App;
