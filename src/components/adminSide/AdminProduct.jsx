import React, { useEffect, useState } from 'react';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
import $ from 'jquery'; // Import jQuery
import 'datatables.net'; // Import DataTables plugin
import AdminNavbar from './AdminNavbar';
import './Adminproduct.css'
const AdminProduct = () => {
  
  useEffect(() => {
    // Initialize DataTable
    $('#example').DataTable({
      responsive: true,
      paging: true,
      pageLength: 8,
      bLengthChange: false, // Hide products per page option
    });
  }, []);

  const [productData, setProductData] = useState([{
    
    title: "Paracetamol",
    age: "22",
    phone: "0323-9082123",
    company: "Calpol",
    price: "4",
    email: "mahad@gmail.com",
  },
  {
    
    title: "Panadol",
    age: "22",
    company: "Calpol",
    price: "10",
    phone: "0323-1239087",
    email: "kumail@gmail.com",
  },
  {
   
    title: "Antamezon DS",
    age: "21",
    phone: "0320-9082768",
    company: "Biogesic",
    price: "22",
    email: "ali@gmail.com",
  },
  {
    
    title: "Baby Care",
    age: "42",
    phone: "0301-8230712",
    company: "Johson's",
    price: "1390",
    email: "zubair@gmail.com",
  },
  {
    
    title: "Baby Bath",
    age: "38",
    phone: "0323-9082123",
    company: "Johnson's",
    price: "1200",
    email: "umair@gmail.com",
  },
  {
   
    title: "Baby Cream",
    age: "27",
    company: "Johnson's",
    price: "660",
    email: "faizan@gmail.com",
  },
  {
    
    title: "Baby Lotion",
    age: "27",
    company: "Pamper's",
    price: "770",
    email: "ahmad@gmail.com",
  },
  {
    
    title: "ECG",
    age: "20",
    company: "Sony",
    price: "12000",
    email: "a_butt@gmail.com",
  },
  {
    
    title: "Fitness Tracker",
    age: "28",
    company: "Apple",
    price: "6000",
    email: "ahsan@gmail.com",
  },
  {
    
    title: "Hair Oil",
    age: "27",
    company: "Sunsilk",
    price: "600",
    email: "tuba@gmail.com",
  },
  {
    
    name: "Hair Spray",
    age: "29",
    company: "0301-4992901",
   
    price: "340",
    email: "we@gmail.com",
  }]);


  
    
    

 

  // ... (rest of your existing code)

  

  return (
    <div className='d-flex'>
      
        <AdminNavbar/>
      
      
        <div className='product-table'>
          <table id="example" className="display " style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>id</th>
                <th>Title</th>
                <th>Company</th>
                <th>Email</th>
                <th>Price</th>
                
              </tr>
            </thead>
            <tbody>
              {productData.map((data,index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{data.title}</td>
                  <td>{data.company}</td>
                  <td style={{ textDecoration: "none" }}>
                    <a
                      href={`mailto:${data.email}`}
                      style={{
                        textDecoration: "none",
                        color: "orange",
                        font: "16px",
                      }}
                      className="email-customer"
                    >
                      {data.email}
                    </a>
                  </td>
                  <td>{data.price}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    </div>
  );

                    }
export default AdminProduct;