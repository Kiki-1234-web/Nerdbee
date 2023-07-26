import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function SignupPage() {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    geolocation: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        location: credentials.geolocation,
        email: credentials.email,
        password: credentials.password
      })
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials");
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
          <h1 className="text-center mt-5">Signup</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" name="name" placeholder="Enter your username" value={credentials.name} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" name="email" placeholder="Enter your email" value={credentials.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" name="password" placeholder="Enter your password" value={credentials.password} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Address</label>
              <input type="address" className="form-control" name="geolocation" placeholder="Enter your address" value={credentials.geolocation} onChange={handleChange} />
            </div>
            <button type="submit" className=" btn btn-secondary">Signup</button>
            <Link to="/login" className="m-3 btn btn-secondary">Already a user</Link>
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

