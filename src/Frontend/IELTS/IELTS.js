import React from "react";
import { Link } from "react-router-dom"; // If you are using routing
import './IeltsPage.css'; // Make sure styles are correctly linked

const IeltsPage = () => {
  const chapters = Array.from({ length: 10 }, (_, i) => `Chapter ${i + 1}`);

  return (
    <div>
    
      <div className="ielts-sidebar">
        <h4 className="text-primary mb-3">Chapters</h4>
        <ul className="list-group">
          {chapters.map((chapter, index) => (
            <li key={index} className="list-group-item border-0">
              <Link to={`/ielts/chapter${index + 1}`} className="text-dark">
                {chapter}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="ielts-content">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="text-center text-primary mb-4">Learn IELTS</h1>
          
        </section>

        

        <section>
          <h2 className="text-secondary">What is IELTS?</h2>
          <p>
            The International English Language Testing System (IELTS) is one of the
            world’s most popular English language proficiency tests for higher
            education and global migration.
          </p>
          <p>
            The IELTS test assesses your abilities in listening, reading, writing, and
            speaking — in less than three hours.
          </p>
        </section>

        <section className="mt-5">
          <h2 className="text-secondary">IELTS Video Lectures</h2>
          <p>Watch the videos below to improve your IELTS preparation:</p>

          <div className="mb-4">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/2hxhgsqKlyE"
              title="IELTS Preparation Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mb-4">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/SmGiDA6_-7w"
              title="IELTS Listening Tips"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="mt-5">
          <h2 className="text-secondary">Additional Resources</h2>
          <ul>
            <li><a href="https://www.ielts.org/" target="_blank" rel="noopener noreferrer">Official IELTS Website</a></li>
            <li><a href="https://www.ieltsbuddy.com/" target="_blank" rel="noopener noreferrer">IELTS Buddy</a></li>
            <li><a href="https://www.magoosh.com/ielts/" target="_blank" rel="noopener noreferrer">Magoosh IELTS Prep</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default IeltsPage;
