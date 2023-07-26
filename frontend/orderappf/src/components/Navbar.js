import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-light fs-1 fst-italic fw-bold" to="/">Nerdbee</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-light fs-4" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fs-4" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fs-4" to="/createuser">Signup</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

   /* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */ 