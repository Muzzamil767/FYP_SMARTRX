import React, { useState } from "react";
import "./Appointment.css";
import img1 from "./images/female1.jpeg";
import img2 from "./images/male1.jpeg";
import img3 from "./images/male2.jpeg";
import img4 from "./images/female2.jpeg";
import img5 from "./images/female3.jpeg";
import img6 from "./images/male3.jpeg";
import img7 from "./images/male4.jpeg";
import img8 from "./images/male5.jpeg";
import img9 from "./images/male6.jpeg";
import img10 from "./images/male7.jpeg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import left from "./images/chevrons-left.svg";
import right from "./images/chevrons-right.svg";
import Navbar1 from "../navbar1/Navbar1";
import Navbar2 from "../navbar2/Navbar2";
import Footer1 from "../footer1/Footer1";
import Footer2 from "../footer2/Footer2";

const Appointment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const doctor_data = [
    {
      id: "1",

      img: img1,
      name: "Dr.Mumtaz Asif",
      specilist: "Gynocologist",
      phone: "0303-9301234",
      email: "mumtaz@gmail.com",
    },
    {
      id: "2",

      img: img2,
      name: "Dr.Muneer Akmal",
      specilist: "Heart Specialist",
      phone: "0300-9002123",
      email: "muneer@gmail.com",
    },
    {
      id: "3",

      img: img3,
      name: "Dr.Kumail Raza",
      specilist: "Dentist",
      phone: "0303-1912876",
      email: "kumail@gmail.com",
    },
    {
      id: "4",

      img: img4,
      name: "Dr.Rehana Wasim",
      specilist: "Surgeon",
      phone: "0321-2332459",
      email: "rehana@gmail.com",
    },
    {
      id: "5",

      img: img5,
      name: "Dr.Ayesha Siddique",
      specilist: "Gynocologist",
      phone: "0303-9965701",
      email: "ayesha@gmail.com",
    },
    {
      id: "6",

      img: img6,
      name: "Dr.Ali Raza",
      specilist: "Dentist",
      phone: "0324-12096289",
      email: "ali@gmail.com",
    },
    {
      id: "7",

      img: img7,
      name: "Dr.Faisal Akram",
      specilist: "Children Specialist",
      phone: "0303-9301234",
      email: "faisal@gmail.com",
    },
    {
      id: "8",

      img: img8,
      name: "Dr.Ahmad Ali",
      specilist: "Dentist",
      phone: "0311-2789234",
      email: "ahmad@gmail.com",
    },
    {
      id: "9",

      img: img9,
      name: "Dr.Ahsaan",
      specilist: "Lung's Specialist",
      phone: "0316-5481937",
      email: "ahsaan@gmail.com",
    },
    {
      id: "10",
      img: img10,

      name: "Dr.Mahad Ashfaq",
      specilist: "Dentist",
      phone: "0303-9302134",
      email: "mahad@gmail.com",
    },
  ];

  const filteredAndSearchedCards = doctor_data.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSearchedCards.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <>
    <Navbar1/>
    <Navbar2/>
      <div className="container">
        <input
          type="text"
          className="appointment-input-1"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className=" container-2">
        <div className="row ">
          {currentProducts.map((card) => (
            <div key={card.id} className="col-lg-4 col-sm-12">
              <div className="card-21">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="appointment-card-image"
                    />
                    <p className="appointment-card-text1">{card.name}</p>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <p className="appointment-card-text2">{card.specilist}</p>
                    <p className="appointment-card-text3">{card.phone}</p>
                    <a
                      href={`mailto:${card.email}`}
                      className="appointment-card-text4"
                    >
                      {card.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="pagination">
          {currentPage !== 1 && (
            <img
              onClick={() => setCurrentPage(currentPage - 1)}
              src={left}
              style={{ fontSize: "smaller", width: "4%" }}
              alt="Previous Page"
            />
          )}

          {currentPage !== 0 && (
            <span
              className="mx-3"
              style={{ marginTop: "10px", fontWeight: "bold" }}
            >
              Page {currentPage}
            </span>
          )}

          {indexOfLastProduct < filteredAndSearchedCards.length && (
            <img
              onClick={() => setCurrentPage(currentPage + 1)}
              src={right}
              style={{ width: "4%" }}
              alt="Next Page"
            />
          )}
        </div>
      </div>
      <Footer1/>
      <Footer2/>
    </>
  );
};

export default Appointment;
