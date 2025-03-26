import React from "react";
import "./videos.css";
import YouTube_Link from "../../assets/profile.png";

const videoIds = [
  "k_EDsv_T8P4", // Example Video 1
  "Leyhx3Gol4A", // Example Video 2
  "H3V0yBJsf-k", // Example Video 3
  "Qr_tXLA74Wo", // Example Video 4
  "4VmDjPflNBQ", // Example Video 5
  "g42YMZN8QIY", // Example Video 6
  "ERicH3QaIGA", // Example Video 6
  "AVDkZepMEQ4", // Example Video 6
  "0aRbIX1hn3A", // Example Video 6
  "804JDOeRzJM", // Example Video 6
];

const YouTubeGrid = () => {
  return (
    <section>
      <div className="video-content">
        <div className="center-video-content">
          <a
            href="https://www.youtube.com/@NayanStudio"
            target="_blank"
            className="youtube-channel"
          >
            <img src={YouTube_Link} alt="Youtube Channel" />
          </a>
          <h2>🎬 Explore Our Creative Works!</h2>
          <p>
            At <span className="highlight">Nayan Studio</span>, we bring
            creativity to life through
            <strong> high-quality videos</strong>. Dive into our
            <em> exclusive content</em>, ranging from{" "}
            <strong>cinematic storytelling </strong>
            to <strong>visual masterpieces</strong> that captivate and inspire.
          </p>
        </div>
      </div>
      <div className="grid-container">
        {videoIds.map((id, index) => (
          <div className="video-box" key={index}>
            <iframe
              width="100%"
              height="auto"
              src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&fs=1`}
              title={`YouTube Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouTubeGrid;
