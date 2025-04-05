import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section text-center text-light d-flex align-items-center" style={{ height: "80vh", background: "#4a90e2" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-md-6 text-start">
            <h1 className="display-4 fw-bold">Master Any Language with Ease</h1>
            <p className="lead">
              Learn new languages with interactive courses, practice exams, and personalized learning pathways.
              Start your journey today and unlock a world of opportunities!
            </p>
            <div className="mt-4">
              <button className="btn btn-light btn-lg me-3" onClick={() => navigate("/signup")}>
                Learn More
              </button>
              <button className="btn btn-outline-light btn-lg" onClick={() => navigate("login")}>
                Login
              </button>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="col-md-6">
            <div className="d-flex justify-content-center">
              <img
                src="https://img.freepik.com/free-psd/flat-design-language-learning-template_23-2149985491.jpg"
                alt="Language Learning"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
