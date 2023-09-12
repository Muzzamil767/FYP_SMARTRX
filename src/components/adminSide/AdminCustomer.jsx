import React, { useEffect, useState } from 'react';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
import $ from 'jquery'; // Import jQuery
import 'datatables.net'; // Import DataTables plugin
import AdminNavbar from './AdminNavbar';
import './AdminCustomer.css';

const AdminCustomer = () => {
  useEffect(() => {
    
    
      $('#example').DataTable({
        responsive: true,
        pagination: true,
        pageLength: 8,
        
      });
    

  }, []);
      const [customerData, setCustomerData] = useState([{
        name: "Mahad Ashfaq",
        age: "22",
        phone: "0323-9082123",
        city: "Lahore",
        postal_code: "54000",
        email: "mahad@gmail.com",
      },
      {
        name: "Kumail Ali",
        age: "22",
        city: "Lahore",
        postal_code: "54000",
        phone: "0323-1239087",
        email: "kumail@gmail.com",
      },
      {
        name: "Ali Raza",
        age: "21",
        phone: "0320-9082768",
        city: "Lahore",
        postal_code: "54000",
        email: "ali@gmail.com",
      },
      {
        name: "Zuabir Butt",
        age: "42",
        phone: "0301-8230712",
        city: "Lahore",
        postal_code: "54000",
        email: "zubair@gmail.com",
      },
      {
        name: "Umair Butt",
        age: "38",
        phone: "0323-9082123",
        city: "Lahore",
        postal_code: "54000",
        email: "umair@gmail.com",
      },
      {
        name: "Faizan Khalid",
        age: "27",
        phone: "0301-4992901",
        city: "Lahore",
        postal_code: "54000",
        email: "faizan@gmail.com",
      },
      {
        name: "Ahmad Hamid",
        age: "27",
        phone: "0311-2910723",
        city: "Lahore",
        postal_code: "54000",
        email: "ahmad@gmail.com",
      },
      {
        name: "Ali Butt",
        age: "20",
        phone: "0300-4342567",
        city: "Lahore",
        postal_code: "54000",
        email: "a_butt@gmail.com",
      },
      {
        name: "Ahsan Latif",
        age: "28",
        phone: "0320-9012739",
        city: "Lahore",
        postal_code: "54000",
        email: "ahsan@gmail.com",
      },
      {
        name: "Tube Ali",
        age: "27",
        phone: "0301-4992901",
        city: "Lahore",
        postal_code: "54000",
        email: "tuba@gmail.com",
      },
      {
        name: "we",
        age: "29",
        phone: "0301-4992901",
        city: "Lahore",
        postal_code: "54000",
        email: "we@gmail.com",
      },]); //
      
        
    


     

    
  return (
    <>
    <div className='d-flex'>
      
      <AdminNavbar/>
    
    
      <div className='customer-table'>
        <table id="example" className="display " style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>email</th>
              <th>phone</th>
             
            </tr>
          </thead>
          <tbody>
  {customerData.map((data,index) => (
    <tr key={index}> 
    <td>{index}</td>
      <td>{data.name}</td>
      <td>{data.age}</td>
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
      <td>{data.phone}</td>
     
    </tr>
  ))}
</tbody>

        </table>
      </div>
    
  </div>
      
    </>
  )
}

export default AdminCustomer
