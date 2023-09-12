import React from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Navbar2.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar2 = () => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const navigateTo = useNavigate();
  const cartItems = JSON.parse(localStorage.getItem("cartData")) || [];

  // Calculate the number of items in the cart
  const cartItemCount = cartItems.length;

  const handleLogout = () => {
    
    localStorage.removeItem("loggedIn");
    navigateTo("/login");
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-light "
        style={{
          padding: "30px",
          position: "sticky",
          top: "0",
          zIndex: "1000",
        }}
      >
        <Container fluid>
          <Link
            to="/"
            className="navbar-links navbar-brand"
            style={{
              color: "#02b9b1",
              fontStyle: "italic",
              fontWeight: "bolder",
            }}
          >
            SmartRX
          </Link>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link
                to="/"
                className="mx-2 navbar-links"
                style={{ color: "#072264", fontSize: "larger" }}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="mx-2 navbar-links"
                style={{ color: "#072264", fontSize: "large" }}
              >
                Products
              </Link>
              <Link
                to="/aboutUs"
                className="mx-2 navbar-links"
                style={{ color: "#072264", fontSize: "large" }}
              >
                About Us
              </Link>
              <Link
                to="/contactUs"
                className="mx-2 navbar-links"
                style={{ color: "#072264", fontSize: "large" }}
              >
                Contact Us
              </Link>
              <button className="nav2-button1">
                {" "}
                <Link
                  to="/appointment"
                  className="mx-2 navbar-links"
                  style={{ color: "#072264", fontSize: "large" }}
                >
                  For Appointment
                </Link>
              </button>
            </Nav>
            <div className="search-login-info d-flex align-items-center">
              {isLoggedIn ? (
                
                <NavDropdown
                  title={
                    <div className="login-info mx-1">
                    <div className="user-icon">
                      <FontAwesomeIcon icon={faUser} className="user-icon" />
                      </div>
                      <Link 
                   
                    className="login-name navbar-links"
                    style={{ fontSize: "larger",marginBottom:"-20px" }}
                  >
                    My Profile
                  </Link>
                    </div>
                  }
                  id="basic-nav-dropdown"
                  style={{ color: "black", marginRight: "20px" }}
                  className="custom-dropdown"
                >
                  {" "}
                  
                  
            
                  <NavDropdown.Item href="/loginUpdate">Update</NavDropdown.Item>
              
                  
                  <NavDropdown.Item href="#" onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
                
              ) : (
                <div className="login-info mx-3">
                  <FontAwesomeIcon icon={faUser} className="user-icon" />
                  <Link
                    to="/login"
                    className="login-name navbar-links"
                    style={{ fontSize: "larger" }}
                  >
                    Login
                  </Link>
                </div>
              )}
              <Link to="/cart" aria-label="Go to shopping cart">
          {cartItemCount > 0 ? (
            <span className="cart-badge">
           
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ fontSize: "larger", color: "black" }}
                className="mx-1"
              />
                          <span className="badge bg-danger ">{cartItemCount}</span>

            </span>
          ) : (
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ fontSize: "larger", color: "black" }}
              className="mx-1"
            />
          )}
        </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar2;
