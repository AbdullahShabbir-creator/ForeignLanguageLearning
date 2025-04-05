import React from "react";

const IeltsPage = () => {
  return (
    <div className="container py-5">
      {/* IELTS Title */}
      <h1 className="text-center text-primary mb-4">About IELTS</h1>
      
      {/* IELTS Content Section */}
      <section>
        <h2 className="text-secondary">What is IELTS?</h2>
        <p>
          The International English Language Testing System (IELTS) is one of the
          world’s most popular English language proficiency tests for higher
          education and global migration. The IELTS test assesses your abilities
          in listening, reading, writing, and speaking — in less than three hours.
        </p>
        <p>
          Whether you are applying to study, work, or migrate, IELTS is designed
          to help you achieve your best score. The test is recognized by over
          10,000 organizations worldwide, including universities, employers, and
          immigration authorities.
        </p>
      </section>

      {/* Video Lectures Section */}
      <section className="mt-5">
        <h2 className="text-secondary">IELTS Video Lectures</h2>
        <p>Check out these helpful IELTS video tutorials to improve your preparation:</p>

        {/* Embedded YouTube Video 1 */}
        <div className="mb-4">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/2hxhgsqKlyE"  // Example video (change to relevant video URL)
            title="IELTS Preparation Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Embedded YouTube Video 2 */}
        <div className="mb-4">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/SmGiDA6_-7w" // Example video (change to relevant video URL)
            title="IELTS Listening Tips"
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
          In addition to video lectures, we recommend checking out some other
          helpful resources to boost your IELTS preparation:
        </p>
        <ul>
          <li><a href="https://www.ielts.org/" target="_blank" rel="noopener noreferrer">Official IELTS Website</a></li>
          <li><a href="https://www.ieltsbuddy.com/" target="_blank" rel="noopener noreferrer">IELTS Buddy</a></li>
          <li><a href="https://www.magoosh.com/ielts/" target="_blank" rel="noopener noreferrer">Magoosh IELTS Prep</a></li>
        </ul>
      </section>
    </div>
  );
};

export default IeltsPage;
