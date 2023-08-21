import React from 'react'
import '../navbar/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
          <nav className="navbar navbar-expand-lg">
  <div className="container my-2">
    <a className="navbar-brand" href="#">GooglePay</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/service">Service</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
       
      </ul>
    
        

        <button className="btn btn-primary  button1 mx-3" type="submit">Sign Up</button>
        <button className="btn btn-primary button2" type="submit">Login In</button>
        
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar