import React, { useEffect } from "react";
import "./About_page.css";

const About = () => {
  // change top title
  useEffect(() => {
    document.title = "About | Nayan Studio";
  }, []);
  return (
    <div className="About_view">
      <div className="center_About_view">
        <div className="About_container">
          <div className="About_content">
            <div className="About_text_container">
              <div className="About_inner_content">
                <h1 className="About_heading">nayan studio.</h1>
                <p className="About_subtitle">
                  <strong>Emotion. Essence. Eternity.</strong>
                </p>
                <p className="About_description">
                  At Nayan Studio, every click is more than just an image — it’s
                  a silent conversation, a heartfelt story frozen in time. Our
                  lens doesn’t just capture faces; it captures the emotions that
                  linger in the unsaid, the spark that lives between moments.
                </p>
                <p className="About_description">
                  We believe art lies not in what the eye can see but in what
                  the heart can feel. Each photograph is a reflection of the
                  unseen — the quiet tear of joy, the unspoken promise, the
                  fleeting glance — emotions too deep for words but too powerful
                  to ignore.
                </p>
                <p className="About_description">
                  Our journey is not about perfection; it’s about authenticity.
                  The raw, the real, the vulnerable — that is where beauty
                  lives. We seek the magic in moments that might otherwise slip
                  away, weaving together fragments of time into a lasting
                  tapestry of memories.Because at Nayan Studio, we don’t just
                  capture pictures — we capture feelings.
                </p>
                <p>
                  <strong>Stories. Emotions. Forever.</strong>
                </p>
              </div>
            </div>
            <div className="About_image_container">
              <div className="About_image_container_img">
                <img
                  src="https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998386/011_11zon_uaa3hw.jpg"
                  alt="Naman Verma"
                  className="About_profile_image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
