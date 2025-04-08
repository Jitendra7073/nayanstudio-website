import React, { useEffect, useState } from "react";
import "./welcome-style.css";
import Logo from "../../assets/logo.png";
import WelcomeImage1 from "../../assets/c9.webp";
import WelcomeImage2 from "../../assets/c15.webp";

const Welcome = ({ action }) => {
  const images = [WelcomeImage1, WelcomeImage2];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(false);
      }, 700);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={`background ${fade ? "fade" : ""}`}
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <div className="content">
        <img src={Logo} alt="Logo" className="Welcome-logo" loading="lazy" />
        <button className="enter-button" onClick={action}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default Welcome;
