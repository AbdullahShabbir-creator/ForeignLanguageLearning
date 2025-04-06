import React from "react";
import { Link } from "react-router-dom"; // Import Link to use routing

const ChinesePage = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh"}}>
      {/* Sidebar Navigation */}
      <div className="ielts-sidebar p-3 bg-light">
        <h4 className="text-primary mb-3">Chapters</h4>
        <ul className="list-group"> 
          <li className="list-group-item border-0">
            <Link to="/ChineseChapter1" className="text-dark">Chapter 1</Link>
          </li>
          <li className="list-group-item border-0">
            <Link to="/ChineseChapter2" className="text-dark">Chapter2</Link>
          </li>
          <li className="list-group-item border-0">
            <Link to="/ChineseChapter3" className="text-dark">Chapter 3</Link>
          </li>
          <li className="list-group-item border-0">
            <Link to="/chinese/chapter4" className="text-dark">Chapter 4</Link>
          </li>
          <li className="list-group-item border-0">
            <Link to="/chinese/chapter5" className="text-dark">Chapter 5</Link>
          </li>
          <li className="list-group-item border-0">
            <Link to="/chinese/chapter6" className="text-dark">Chapter 6</Link>
          </li>
          <li className="list-group-item border-0">
            <Link to="/chinese/chapter7" className="text-dark">Chapter 7</Link>
          </li>
          <li className="list-group-item border-0">
            <Link to="/chinese/chapter8" className="text-dark">Chapter 8</Link>
          </li>
          <li className="list-group-item border-0">
            <Link to="/chinese/chapter9" className="text-dark">Chapter 9</Link>
          </li>
          <li className="list-group-item border-0">
            <Link to="/chinese/chapter10" className="text-dark">Chapter 10</Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1 p-4" style={{ marginLeft: "250px" , marginTop:"90px" }}>
        <h1 className="text-center text-primary mb-4">Learn Chinese</h1>

        {/* Chinese Language Content Section */}
        <section>
          <h2 className="text-secondary">Why Learn Chinese?</h2>
          <p>
            Chinese, specifically Mandarin, is the most spoken language in the
            world. It is the official language of China, Taiwan, and Singapore, and
            is widely spoken in other regions. Learning Chinese will open up
            opportunities in business, culture, travel, and international relations.
          </p>
          <p>
            As China plays a crucial role in the global economy, knowing Chinese
            can be a major asset for anyone interested in working, studying, or
            engaging in business in the region. Additionally, learning Chinese
            exposes you to one of the richest and oldest cultures in the world.
          </p>
        </section>

        {/* Video Lectures Section */}
        <section className="mt-5">
          <h2 className="text-secondary">Chinese Language Video Lectures</h2>
          <p>Check out these video tutorials to help you get started with learning Chinese:</p>

          <div className="mb-4">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/KZov4XXEz9g"
              title="Learn Chinese for Beginners"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mb-4">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/N5J0Wek0yEs"
              title="Chinese Pronunciation Tips"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="mt-5">
          <h2 className="text-secondary">Additional Resources</h2>
          <p>
            In addition to the video lectures, check out these helpful resources to
            enhance your Chinese learning journey:
          </p>
          <ul>
            <li><a href="https://www.chinesepod.com/" target="_blank" rel="noopener noreferrer">ChinesePod</a></li>
            <li><a href="https://www.duolingo.com/course/zh/en/Learn-Chinese" target="_blank" rel="noopener noreferrer">Duolingo Chinese Course</a></li>
            <li><a href="https://www.mandarincorner.org/" target="_blank" rel="noopener noreferrer">Mandarin Corner</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ChinesePage;
