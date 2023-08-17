import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
export default function Navbar() {
  const [cartView, setCartView] = useState(false)
  let data = useCart();
  const navigate = useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem("authToken");
    navigate('/login')
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-light fs-1 fst-italic fw-bold" to="/">Nerdbee</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item ">
          <Link className="nav-link text-light fs-4" aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authToken"))?<li className="nav-item">
          <Link className="nav-link text-light fs-4" aria-current="page" to="/myOrder">My Orders</Link>
        </li>:""}
      </ul>
      {(!localStorage.getItem("authToken"))?
      <div className='d-flex'>
      <Link className="nav-link text-light fs-4" to="/login">Login</Link> 
      <Link className="nav-link text-light fs-4" to="/createuser">Signup</Link>
   
      </div>
      :
      <div>
      <div className="btn bg-dark text-light fs-4" onClick={()=>{setCartView(true)}}>My Cart
      <Badge pill bg="info">{data.length}</Badge></div> 
      {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
      <div className="btn bg-dark text-light fs-4" onClick={handlelogout}>Logout</div> 
      </div>
      }
    </div>
  </div>
</nav>
    </div>
  )
}

   /* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */ 
    // My orders, cart, logout

    // Correct the home hanging up
    // *NOTES*
    // Link works as an anchor tag