import React, { useEffect } from "react";
import "./Gallery_Format.css";
import Slider from "../../../components/Grid_image_Slider";
import PropTypes from "prop-types";
import ShareLike from "../../../components/ShareLike";

// Function to preload images
const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const GalleryFormat = ({ heading, date, content, sliderImages, venue }) => {
  useEffect(() => {
    preloadImages(sliderImages);
  }, [sliderImages]); // Preload images only once when component mounts

  return (
    <section className="post-section">
      <div className="post-view">
        <div className="post-header">
          <div className="post-header-heading">
            <h1>{heading}</h1>
          </div>
        </div>
        <div className="post-content">
          <p>{content}</p>
        </div>
        <div className="post-slider">
          <Slider Images={sliderImages} />
        </div>
        
        <div className="post-ShareLike">
          <ShareLike heading={heading} content={content} likeFrom="Galleries" />
        </div>
      </div>
    </section>
  );
};

GalleryFormat.propTypes = {
  heading: PropTypes.string.isRequired,
  sliderImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GalleryFormat;
