import React, { useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./gridImageSlider.css"; // Add minimal styles here

// Custom Arrow Component
const CustomArrow = ({ onClick, direction }) => (
  <button
    className={`custom-arrow ${direction}`}
    onClick={onClick}
    aria-label={`${direction} arrow`}
  >
    {direction === "next" ? (
      <img src="https://cdn-icons-png.flaticon.com/128/8213/8213522.png" alt="" height={20} width={20} />
    ) : (
      <img src="https://cdn-icons-png.flaticon.com/128/8213/8213500.png" alt="" height={20} width={20} />
    )}
  </button>
);

const GridSlider = ({ Images }) => {
  // Memoize settings for performance
  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      nextArrow: <CustomArrow direction="next" />,
      prevArrow: <CustomArrow direction="prev" />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }),
    []
  );

  // Render fallback if no images
  if (!Images || Images.length === 0) return <p>No images to display</p>;

  return (
    <Slider {...settings} className="grid-images-slider">
      {Images.map((image, index) => (
        <div key={index} className="slider-item">
          <LazyLoadImage
            src={image}
            alt={`Slide ${index + 1}`}
            effect="blur"
            loading="lazy"
          />
        </div>
      ))}
    </Slider>
  );
};

export default GridSlider;
