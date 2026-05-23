import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ user, setUser }) {
  function logOut() {
    localStorage.removeItem('token');
    setUser(null);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">EduScholar</div>

      <div className="navbar-links">
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/scholarships">Scholarships</Link>
        <Link className="nav-item" to="/universities">Universities</Link>
      </div>

      <div className="navbar-auth">
        {user ? (
          <>
            <span className="user-name">{user.username}</span>
            <button className="btn-auth logout-btn" onClick={logOut}>Log Out</button>
          </>
        ) : (
          <>
            <Link className="btn-auth" to="/sign-in">Login</Link>
            <Link className="btn-auth" to="/sign-up">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;