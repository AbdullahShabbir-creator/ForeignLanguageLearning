import React from "react";

const GermanPage = () => {
  return (
    <div className="container py-5">
      {/* German Language Title */}
      <h1 className="text-center text-primary mb-4">Learn German</h1>
      
      {/* German Language Content Section */}
      <section>
        <h2 className="text-secondary">Why Learn German?</h2>
        <p>
          German is one of the most widely spoken languages in Europe and is
          the official language of Germany, Austria, Switzerland, and parts of
          Belgium and Luxembourg. Whether you're planning to work, study, or live
          in a German-speaking country, learning German can open up a world of
          opportunities.
        </p>
        <p>
          German is the most widely spoken native language in Europe and is an
          essential language for business, science, technology, and the arts. By
          learning German, you'll be able to access a wealth of knowledge and
          communicate with millions of people worldwide.
        </p>
      </section>

      {/* Video Lectures Section */}
      <section className="mt-5">
        <h2 className="text-secondary">German Language Video Lectures</h2>
        <p>Check out these video tutorials to help you get started with learning German:</p>

        {/* Embedded YouTube Video 1 */}
        <div className="mb-4">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/dXQ2sHTgMIs"  // Example video (change to relevant video URL)
            title="Learn German for Beginners"
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
            src="https://www.youtube.com/embed/TzZXbAf5hg0" // Example video (change to relevant video URL)
            title="German Pronunciation Tips"
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
          enhance your German learning journey:
        </p>
        <ul>
          <li><a href="https://www.dw.com/en/learn-german/s-2469" target="_blank" rel="noopener noreferrer">Deutsche Welle - Learn German</a></li>
          <li><a href="https://www.duolingo.com/course/de/en/Learn-German" target="_blank" rel="noopener noreferrer">Duolingo German Course</a></li>
          <li><a href="https://www.goethe.de/en/index.html" target="_blank" rel="noopener noreferrer">Goethe-Institut German Resources</a></li>
        </ul>
      </section>
    </div>
  );
};

export default GermanPage;
