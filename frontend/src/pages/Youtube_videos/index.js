import React, { useState } from "react";
import "./videos.css";
import YouTube_Link from "../../assets/profile.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const videoIds = [
  "k_EDsv_T8P4",
  "Leyhx3Gol4A",
  "H3V0yBJsf-k",
  "Qr_tXLA74Wo",
  "4VmDjPflNBQ",
  "g42YMZN8QIY",
  "ERicH3QaIGA",
  "AVDkZepMEQ4",
  "0aRbIX1hn3A",
  "804JDOeRzJM",
  "x5ZgJiR1rZQ",
  "093LQY3tW8k",
  "fojl319dR94",
  "SiGApVQJKeY",
  "qAgABElMo_U",
  "zlpJFj99mQ4",
  "GGcuUrm8F7I",
  "Y-NuchmFi8o",
  "BDLlLsz_rRM",
  "dj9SOazjy-A",
  "GO8BpZ-3dCo",
];

const YouTubeGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10); // Show only 10 initially

  const showMoreVideos = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 10, videoIds.length));
  };

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
        {videoIds.slice(0, visibleCount).map((id, index) => (
          <div
            className="video-box"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Hover to play"
            data-tooltip-place="auto"
          >
            <iframe
              width="100%"
              height="auto"
              src={`https://www.youtube.com/embed/${id}?${
                hoveredIndex === index ? "autoplay=1" : "autoplay=0"
              }&mute=1&fs=1`}
              title="Present By Nayan Studio"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {visibleCount < videoIds.length && (
        <div className="more-videos-button">
          <button
            className="button-design"
            onClick={showMoreVideos}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Dispaly More 10 Videos"
            data-tooltip-place="right"
          >
            Show More
          </button>
        </div>
      )}

      <Tooltip id="my-tooltip" />
    </section>
  );
};

export default YouTubeGrid;
