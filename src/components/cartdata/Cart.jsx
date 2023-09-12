import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import del from "./images/trash-2.svg";
import { useNavigate } from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Navbar1 from "../navbar1/Navbar1";
import Navbar2 from "../navbar2/Navbar2";
import Footer1 from "../footer1/Footer1";
import Footer2 from "../footer2/Footer2";

const Cart = () => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const navigateTo = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const cartData = localStorage.getItem("cartData");
  const parsedCartData = cartData ? JSON.parse(cartData) : [];
  if (!isLoggedIn) {
    alert("Please log in first");
    // Redirect to login page or take appropriate action
    //navigateTo('./login')
  }

  const initialCartItems = parsedCartData.map((item) => ({
    ...item,
    quantity: item.quantity || 1,
  }));
  
  const [cartItems, setCartItems] = useState(initialCartItems);
  

  const totalAmount = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  const handleDeleteItem = (itemId) => {
    const updatedCartData = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartData);
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
  };

  const handleIncrement = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartData", JSON.stringify(updatedCartItems));
  };
  
  const handleDecrement = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartData", JSON.stringify(updatedCartItems));
  };
  
  const handleProceed = () => {
    if (parsedCartData.length === 0) {
      alert("Your Cart is Empty. Please add something"); // Show the modal instead of alert
    } else {
      navigateTo("/address");
    }
  };

  console.log(parsedCartData.length);

  return (
    <>
      
      { isLoggedIn ?  (
        <>
        <Navbar1 />
      <Navbar2 />
        <div className="container">
          <h1
            style={{
              marginTop: "20px",
              marginBottom: "30px",
              fontWeight: "bolder",
            }}
          >
            Cart Products{" "}
          </h1>
          <div className="row">
            <div className="col-lg-8 col-sm-12 col-md-12 cart-left1">
              <h4 style={{ marginTop: "20px", marginBottom: "20px" }}>
                Medicine and Other products
              </h4>
              <hr />

              {cartItems.length === 0 ? (
                <h2
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontWeight: "bolder",
                    marginTop: "30px",
                  }}
                  className="cart-empty-message"
                >
                  Your cart is empty.
                </h2>
              ) : (
                
                  
                    <div className="cart-items">
                      {cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <img src={item.image} className="cart-img" />
                              <p
                                className="cart-description1"
                                onClick={() => console.log("Item ID:", item.id)}
                              >
                                {item.description1}
                              </p>
                            </div>
                            <div className="col-lg-6 ">
                              <div className="d-flex">
                                <p
                                  style={{ color: "black", fontWeight: "350" }}
                                >
                                  Quantity:{" "}
                                  <button
                                    style={{ border: "none" }}
                                    onClick={() => handleDecrement(item.id)}
                                  >
                                    {" "}
                                    -{" "}
                                  </button>{" "}
                                  <input
                                    type="num"
                                    value={item.quantity}
                                    readOnly
                                    style={{
                                      width: "10%",
                                      textAlign: "center",
                                    }}
                                  />{" "}
                                  <button
                                    onClick={() => handleIncrement(item.id)}
                                    style={{ border: "none" }}
                                  >
                                    {" "}
                                    +{" "}
                                  </button>
                                </p>
                                <p className="cart-price">Rs{item.price*item.quantity }</p>
                                <button
                                  onClick={() => handleDeleteItem(item.id)}
                                  className="btn btn-danger btn-small"
                                  style={{ height: "50%", marginTop: "70px" }}
                                >
                                  <img src={del} />
                                </button>
                              </div>
                            </div>
                          </div>

                          <hr />
                        </div>
                      ))}
                    </div>
                
                
              )}
            </div>

            <div className="col-lg-4 col-sm-12 col-md-12">
              <div className="right-cart1 container">
                <h3 className="right-cart1-title">Order Summary</h3>
                <hr />
                <p style={{ color: "black", fontWeight: "350" }}>
                  <span style={{ marginRight: "190px" }}>SubTotal</span>{" "}
                  <span>Rs: {totalAmount}</span>
                </p>
                <p style={{ color: "black", fontWeight: "350" }}>
                  <span style={{ marginRight: "190px" }}>Delivery Fee</span>{" "}
                  <span>Rs:1</span>
                </p>
                <hr />
                <p style={{ color: "black", fontWeight: "350" }}>
                  <span style={{ marginRight: "150px" }}>Total amount</span>{" "}
                  <span>Rs: {totalAmount+1}</span>
                </p>
              </div>
              <button className="btn  cart-proceed" onClick={handleProceed}>
                Proceed
              </button>
            </div>
          </div>
       
      </div>
      <Footer1 />
      <Footer2 />
      </>
        
     )  : (
        <Login />
      )}
      
    </>
  );
};

export default Cart;
