import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container">
        {/* Left Side - Logo */}
        <Link className="navbar-brand" to="/">🌍 Language Learning Platform</Link>

        {/* Navbar Toggle (For Mobile View) */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center - Modules */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            {/* Course Content Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="courseDropdown" role="button" data-bs-toggle="dropdown">
                Course Content
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Link 1</Link></li>
                <li><Link className="dropdown-item" to="/">Link 2</Link></li>
              </ul>
            </li>

            {/* Exam Test Practice Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="examDropdown" role="button" data-bs-toggle="dropdown">
                Exam Practice
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Link 1</Link></li>
                <li><Link className="dropdown-item" to="/">Link 2</Link></li>
              </ul>
            </li>

            {/* Dynamic Learning Pathway Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="learningDropdown" role="button" data-bs-toggle="dropdown">
                Learning Path
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Link 1</Link></li>
                <li><Link className="dropdown-item" to="/">Link 2</Link></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Right Side - Search & User Icon */}
        <div className="d-flex">
          {/* Redirect to Signup Page */}
          <Link className="nav-link me-3" to="/signup">
            <i className="fa-solid fa-circle-user"></i>
          </Link>

          {/* Location Icon */}
          <Link className="nav-link" to="/">
            <i className="fa-solid fa-location-dot"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
