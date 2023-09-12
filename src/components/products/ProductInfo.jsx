import React from "react";
import "./ProductInfo.css";
import Toast from 'react-bootstrap/Toast';

const ProductInfo = ({ cardData, closeModal }) => {
  console.log("what is in selectedcard", cardData);

  const handleAddToCart = () => {
    const existingCartData = localStorage.getItem("cartData");
    const parsedExistingCartData = existingCartData ? JSON.parse(existingCartData) : [];
  
    const isItemAlreadyInCart = parsedExistingCartData.some(item => item.id === cardData.id);
  
    if (isItemAlreadyInCart) {
      alert("Already Exist in Cart!")
    } else {
      const updatedCartData = [...parsedExistingCartData, cardData];
      localStorage.setItem("cartData", JSON.stringify(updatedCartData));
      console.log("Added to cart:", cardData.title);
    }
  };
  
  
  
  
  
  

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span
            className="close"
            style={{ fontSize: "xx-large" }}
            onClick={closeModal}
          >
            &times;
          </span>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-12">
                {" "}
                <img
                  className="modal-image"
                  src={cardData.image}
                  alt="image here"
                />
              </div>
              <div className="col-lg-7 col-sm-12">
                <h2 className="modal-title">{cardData.title}</h2>
                <p className="modal-description1" style={{ color: "black" }}>
                  {cardData.description1}
                </p>
                <p className="modal-description2">
                  Brand: {cardData.description2}
                </p>
                <p className="modal-price">Price: Rs:{cardData.price}</p>
                <hr />
                <h4>Expert Advise:</h4>
                <ul>
                  <li>Take Medicines with meal or Water.</li>
                  <li>Take Medicines after contact with Doctor.</li>
                  <li>Please drink water to prevent dehydration</li>
                  <li>Please avoid Alcohol for good health</li>
                </ul>
                <button className="btn btn-warning btn-lg " onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
