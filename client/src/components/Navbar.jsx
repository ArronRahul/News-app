import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../App.css";

export default function Navbar({ auth}) {
  const navigate = useNavigate();

  const handleOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
    window.location.reload();
    console.log("Logged out successfully");
  };

  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        {auth ? (
          <li><a onClick={handleOut}>Logout</a></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </div>
  );
}
