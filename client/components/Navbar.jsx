import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {

  const logOut = () => {
    document.cookie = "SSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    //const navigate = useNavigate();
    //navigate('/');
    window.location.href = 'http://localhost:8080';
    // window.location.reload();
  }

  return (
    <div className = "Navbar">
      <div>Goblin Finder</div>
      <div><Link className="nav-link" to="/">Home</Link></div>
      <div><Link className="nav-link" to="/me">Profile</Link></div>
      <div><Link className="nav-link" to="/findEvents">Find Events</Link></div>
      <div><Link className="nav-link" to="/hostEvents">Host Event</Link></div>
      <div><Link className="nav-link" to="/" onClick={logOut}>Logout</Link></div>
    </div>
  )
}


export default Navbar;