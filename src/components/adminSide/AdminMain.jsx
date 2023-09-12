import React from "react";
import AdminNavbar from "./AdminNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faStar,
  faUsers,
  faShoppingCart,
  faDollarSign,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
import "./AdminMain.css";
const AdminMain = () => {
  return (
    <div className="d-flex">
      <AdminNavbar />
      <div className="flex-grow-1 ">
        <div className="container-2 main-boxes">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="boxes-1">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 left-1">
                    <FontAwesomeIcon
                      icon={faUsers}
                      style={{
                        fontSize: "20px",
                        marginLeft: "20px",
                        border: "1px solid white",
                        padding: "15px",
                        color: "white",
                        borderRadius: "90%",
                        backgroundColor: "darkBlue",
                      }}
                    />
                    <p>Show Details</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 right-1">
                    <h6>Total Customers</h6>
                    <h3>120</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="boxes-2">
              <div className="row">
                  <div className="col-lg-6 col-sm-6 left-2">
                    <FontAwesomeIcon
                      icon={faBox}
                      style={{
                        fontSize: "20px",
                        marginLeft: "20px",
                        border: "1px solid white",
                        padding: "15px",
                        color: "white",
                        borderRadius: "90%",
                        backgroundColor: "green",
                      }}
                    />
                    <p>Show Details</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 right-2">
                    <h6>Total Products</h6>
                    <h3>180</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="boxes-3">
              <div className="row">
                  <div className="col-lg-6 col-sm-6 left-3">
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      style={{
                        fontSize: "20px",
                        marginLeft: "20px",
                        border: "1px solid white",
                        padding: "15px",
                        color: "white",
                        borderRadius: "90%",
                        backgroundColor: "yellowgreen",
                      }}
                    />
                    <p>Show Details</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 right-3">
                    <h6>Total Profit</h6>
                    <h3>$567</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Row2 */}
        <div className="container main-boxes">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="boxes-4">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 left-1">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        fontSize: "20px",
                        marginLeft: "20px",
                        border: "1px solid white",
                        padding: "15px",
                        color: "white",
                        borderRadius: "90%",
                        backgroundColor: "orange",
                      }}
                    />
                    <p>Show Details</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 right-1">
                    <h6>Total Stats</h6>
                    <h3>60</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="boxes-5">
              <div className="row">
                  <div className="col-lg-6 col-sm-6 left-2">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      style={{
                        fontSize: "20px",
                        marginLeft: "20px",
                        border: "1px solid white",
                        padding: "15px",
                        color: "white",
                        borderRadius: "90%",
                        backgroundColor: "red",
                      }}
                    />
                    <p>Show Details</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 right-2">
                    <h6>Remainning Products</h6>
                    <h3>28</h3>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        {/* Row 3 */}
       
      </div>
    </div>
  );
};
export default AdminMain;
