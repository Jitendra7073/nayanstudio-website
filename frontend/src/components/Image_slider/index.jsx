import React from "react";
import Slider from "react-slick";
// icons
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
// css
import "./Image_slider.css";

const CustomArrow = ({ onClick, direction }) => (
  <button
    className={`custom-arrow ${direction}`}
    onClick={onClick}
    aria-label={`${direction} arrow`}
  >
    {direction === "next" ? (
      <img
        src="https://cdn-icons-png.flaticon.com/128/8213/8213522.png"
        alt="next"
        height={20}
        width={20}
      />
    ) : (
      <img
        src="https://cdn-icons-png.flaticon.com/128/8213/8213500.png"
        alt="previous"
        height={20}
        width={20}
      />
    )}
  </button>
);

const Index = ({ images }) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="fade_out_slider">
        {images.map((image, index) => (
          <div className="image_container_each" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Index;
