import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
      <div className="container">
        {/* Left Side - Logo */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          🌍 Language Learning Platform
        </Link>

        {/* Navbar Toggle (For Mobile View) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center - Modules */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            {/* Course Content Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="courseDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Course Content
              </a>
              <ul className="dropdown-menu shadow">
                <li><Link className="dropdown-item" to="/">IELTS</Link></li>
                <li><Link className="dropdown-item" to="/">German</Link></li>
                <li><Link className="dropdown-item" to="/">Chinese</Link></li>
              </ul>
            </li>

            {/* Exam Test Practice Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="examDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Exam Practice
              </a>
              <ul className="dropdown-menu shadow">
                {/* Nested dropdown under Mock Tests */}
                <li className="nav-item dropdown">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    id="mockTestsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Mock Tests
                  </a>
                  <ul className="dropdown-menu shadow">
                    <li><Link className="dropdown-item" to="/mock-tests/level-1">Level 1</Link></li>
                    <li><Link className="dropdown-item" to="/mock-tests/level-2">Level 2</Link></li>
                    <li><Link className="dropdown-item" to="/mock-tests/level-3">Level 3</Link></li>
                  </ul>
                </li>
                <li><Link className="dropdown-item" to="/">Display Result</Link></li>
              </ul>
            </li>

            {/* Dynamic Learning Pathway Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="learningDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Learning Path
              </a>
              <ul className="dropdown-menu shadow">
                <li><Link className="dropdown-item" to="/">Recommendations</Link></li>
              
              </ul>
            </li>
          </ul>
        </div>

        {/* Right Side - Search & User Icon */}
        <div className="d-flex align-items-center">
          {/* Signup Icon */}
          <Link className="nav-link me-3 text-primary fs-5" to="/signup">
            <i className="fa-solid fa-user-circle"></i>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
