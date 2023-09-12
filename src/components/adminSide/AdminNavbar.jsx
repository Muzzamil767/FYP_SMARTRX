import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AdminNavbar.css'
//import NavDropdown from 'react-bootstrap/NavDropdown';
const AdminNavbar = () => {
  return (
    <Navbar expand="lg" className=" p-3 navbar-admin">
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-0 nav-toggle-admin" style={{color:"white",backgroundColor:"white"}}/>
    <Navbar.Collapse id="basic-navbar-nav" className="order-lg-1">
      <Nav className="flex-column link-main-admin">
      <Link
            to="/"
            className="navbar-links navbar-brand"
            style={{
              color: "#02b9b1",
              fontStyle: "italic",
              fontWeight: "bolder",
              marginBottom:"20px",
              fontSize:"larger"
            }}
          >
            SmartRX
          </Link>
        <Link to="/adminMain" className="nav-link-admin">Dashboard</Link>
        <Link to="/adminProduct" className="nav-link-admin">Product</Link>
        <Link to="/adminCustomer" className="nav-link-admin">Customer</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};
export default AdminNavbar
