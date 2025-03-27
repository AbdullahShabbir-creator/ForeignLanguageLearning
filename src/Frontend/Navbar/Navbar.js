import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container">
        {/* Left Side - Logo */}
        <a className="navbar-brand" href=" /">🌍 LanguageLearn</a>

        {/* Navbar Toggle (For Mobile View) */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center - Modules */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            {/* Course Content Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href=" /" id="courseDropdown" role="button" data-bs-toggle="dropdown">
                Course Content
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href=" /">Link 1</a></li>
                <li><a className="dropdown-item" href=" /">Link 2</a></li>
              </ul>
            </li>

            {/* Exam Test Practice Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href=" /" id="examDropdown" role="button" data-bs-toggle="dropdown">
                Exam Practice
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href=" /">Link 1</a></li>
                <li><a className="dropdown-item" href=" /">Link 2</a></li>
              </ul>
            </li>

            

            {/* Dynamic Learning Pathway Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href=" /" id="learningDropdown" role="button" data-bs-toggle="dropdown">
                Learning Path
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href=" /">Link 1</a></li>
                <li><a className="dropdown-item" href=" /">Link 2</a></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Right Side - Search & User Icon */}
        <div className="d-flex">
          <a className="nav-link me-3" href=" /"><i class="fa-solid fa-circle-user"></i></a>
          <a className="nav-link" href=" /">  <i class="fa-solid fa-location-dot"></i></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
