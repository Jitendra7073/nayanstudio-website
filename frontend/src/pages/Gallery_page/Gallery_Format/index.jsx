import React from "react";
import "./Gallery_Format.css";
import Slider from "../../../components/Grid_image_Slider";
import PropTypes from "prop-types";
import ShareLike from "../../../components/ShareLike";

const GalleryFormat = ({ heading, date, content, sliderImages, venue }) => {
  return (
    <section className="post-section">
      <div className="post-view">
        <div className="post-header">
          <div className="post-header-heading">
            <h1>{heading}</h1>
            <p>{date}</p>
          </div>
        </div>
        <div className="post-content">
          <p>{content}</p>
        </div>
        <div className="post-slider">
          <Slider Images={sliderImages} />
        </div>
        {/* <div className="post-venue">
          <p><strong>Venue:</strong> {venue}</p>
        </div> */}
        <div className="post-ShareLike">
          <ShareLike heading={heading} content={content} likeFrom="Galleries" />
        </div>
      </div>
    </section>
  );
};

GalleryFormat.propTypes = {
  heading: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  sliderImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  venue: PropTypes.string.isRequired,
};

export default GalleryFormat;
