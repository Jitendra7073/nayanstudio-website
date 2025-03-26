import React from "react";
// Import CSS for this page
import "./testinomial_style.css";
// Import video
import Poster from "../../assets/images/testimonial/1.mp4";
// Function to dynamically import all images from a directory
const importAll = (requireContext) =>
  requireContext.keys().map(requireContext);

// Dynamically load images for each slider
const Testimonial_posters = importAll(
  require.context(
    "../../assets/images/testimonial/",
    false,
    /\.(png|jpe?g|JPG|webp|svg)$/ // Match image file extensions
  )
);



const Testimonial = () => {
  return (
    <section className="testinonmial_section">
      {/* Video Section */}
      <div className="image_container_of_testinomial_page video_page">
        <video src={Poster} controls={false} muted autoPlay loop></video>
      </div>

      {/* Image Section */}
      {Testimonial_posters.map((item, index) => (
        <div key={index} className="image_container_of_testinomial_page">
          <img src={item} alt={`Testimonial ${index + 1}`} />
        </div>
      ))}
    </section>
  );
};

export default Testimonial;
