import React,{useState} from "react";
import "./Payment.css";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert from 'react-bootstrap/Alert';
import {
  faArrowLeft,
  faPlus,
  faHome,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import Footer1 from "../footer1/Footer1";
import Footer2 from "../footer2/Footer2";
import Navbar1 from "../navbar1/Navbar1";
import Navbar2 from "../navbar2/Navbar2";

const Payment = () => {

  const [paymentOption, setPaymentOption] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };
  const handleCardInputChange = (event) => {
    const { name, value } = event.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const isCardDetailsValid = () => {
    const { cardNumber, expiryDate, cvv } = cardDetails;
    return cardNumber.trim() !== "" && expiryDate.trim() !== "" && cvv.trim() !== "";
  };
 


  return (
    <>
    <Navbar1/>
    <Navbar2/>
      <div className="container">
        <Link to="/address">
          <div className="d-flex" style={{ color: "blue", fontSize: "larger" }}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <h6 style={{ marginLeft: "10px", fontSize: "large" }}>
              Back to Cart
            </h6>
          </div>{" "}
        </Link>
        <h1>CheckOut</h1>
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <div className="payment-main">
              <div className="row">
                <div className="col-lg-9 col-sm-9">
                  <h4>Shipping Address</h4>
                </div>
                <div
                  className="col-lg-3 col-sm-3 d-flex"
                  style={{ marginTop: "20px", color: "blue" }}
                >
                  {/*<FontAwesomeIcon
                    icon={faPlus}
                    style={{ marginTop: "15px", marginRight: "10px" }}
                  />*/}
                  <p style={{ color: "blue" }}>Add Address</p>
                </div>
              </div>
              <hr />
              <h3 style={{textAlign:"left",marginLeft:"10px"}}>Payment Option</h3>

              <div className="payment-checkbox">
              <div style={{ marginBottom: "1px" }}>
                <input
                  type="radio"
                  name="paymentOption"
                  value="cashOnDelivery"
                  checked={paymentOption === "cashOnDelivery"}
                  onChange={handlePaymentOptionChange}
                />
                <label htmlFor="cashOnDelivery">Cash On delivery</label>
              </div>
              <br />
              <div style={{ marginBottom: "1px" }}>
                <input
                  type="radio"
                  name="paymentOption"
                  value="debitCard"
                  checked={paymentOption === "debitCard"}
                  onChange={handlePaymentOptionChange}
                />
                <label htmlFor="debitCard">Debit card</label>
              </div>
              <br />
            </div>

           
            {paymentOption === "debitCard" && (
              <div className="card-details">
                <h3 style={{textAlign:"left",marginLeft:"10px"}}>Enter Card Details</h3>
                <div>
                
                  <input
                    type="number"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={cardDetails.cardNumber}
                    onChange={handleCardInputChange}
                    style={{marginBottom:"10px"}}
                  /><br/>
                
              
                  <input
                    type="date"
                    name="expiryDate"
                    placeholder="Expiry Date"
                    value={cardDetails.expiryDate}
                    onChange={handleCardInputChange}
                    style={{marginBottom:"10px"}}
                  /><br/>
                  
                  <input
                    type="number"
                    name="cvv"
                    placeholder="CVV"
                    value={cardDetails.cvv}
                    onChange={handleCardInputChange}
                    style={{marginBottom:"10px"}}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* ... */}
          <div className="col-lg-4 col-sm-12">
            <div className="address-right">
              <h5>How to Upload Your Prescription?</h5>
              <div>
                <p>
                  Do not crop out any part of the prescription image. Avoid
                  unclear or blurred image of your prescription. Include details
                  of your doctor, patient and clinic visit date.
                </p>
                <p>
                  Medicines will only be dispensed against a valid prescription.
                </p>
              </div>
            </div>

            {paymentOption === "debitCard" && !isCardDetailsValid() && (
                <Alert variant="danger">
                  Please fill in all card details before confirming the order.
                </Alert>
              )}
<div>
<Link to="/cardEnd">
  <button
    className={`btn prescription-proceed btn-lg ${(!paymentOption || (paymentOption === "debitCard" && !isCardDetailsValid())) ? "disabled" : ""}`}
    disabled={!paymentOption || (paymentOption === "debitCard" && !isCardDetailsValid())}
  >
    Confirm Order
  </button>
</Link>

</div>

          </div>
        </div>
      </div>
      <Footer1/>
      <Footer2/>
    </>
  );
};

export default Payment;