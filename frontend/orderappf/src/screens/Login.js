import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function LoginPage() {

    const [credentials, setCredentials] = useState({
        email:'',
        password: ''
      })
    let navigate = useNavigate();
      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const response = await fetch("http://localhost:5000/api/loginuser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password
          })
        });
        const json = await response.json();
        console.log(json);
    
        if (!json.success) {
          alert("Enter valid credentials");
        }
        if (json.success) {
          localStorage.setItem("userEmail",credentials.email)
          localStorage.setItem("authToken",json.authToken)
           navigate("/");
          }
    }
    catch (error) {
        console.error('Error fetching data:', error);
      }
      };
    
      const handleChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
      };

  return (
    <div>
    <div>
      <Navbar />
    </div>
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h1 className="text-center mt-5">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name="email" placeholder="Enter your email" value={credentials.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Enter your password" value={credentials.password} onChange={handleChange} />
          </div>
          <button type="submit" className=" btn btn-secondary">Login</button>
          <Link to="/createuser" className="m-3 btn btn-secondary">I'm a new User</Link>
        </form>
      </div>
    </div>
  </div>
  <div>
      <Footer />
    </div>
    </div>
  );
}

