import React, { useEffect } from "react";
import ImageSlider from "../../components/Image_slider";
import GridSlider from "../../components/Grid_image_Slider";
import { Link } from "react-router-dom";
import "./Home_page.css";
import Bhageyakhevana from "../../assets/images/All photos/J/img.webp";
import LancyPavan from "../../assets/images/All photos/K/img.webp";
import StephanieSoumyadeep from "../../assets/images/All photos/YS/036.webp";

// Function to dynamically import images from a folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);

// Dynamically load images for each slider
const Slider_1 = importAll(
  require.context(
    "../../assets/images/Home_page/slider-1",
    false,
    /\.(png|jpe?g|JPG|webp|svg)$/ // Match image file extensions
  )
);
const Slider_2 = importAll(
  require.context(
    "../../assets/images/Home_page/slider-2",
    false,
    /\.(png|jpe?g|JPG|webp|svg)$/ // Match image file extensions
  )
);

const Home = () => {
  // change top title
  useEffect(() => {
    document.title = "Home | Nayan Studio";
  }, []);

  const HomeCards = [
    {
      img: Bhageyakhevana,
      to: "./stories/2024-10-17-Bhagyesh&Khevana",
      details: "Bhagyesh & Khevana// Jaishalmer //",
    },
    {
      img: StephanieSoumyadeep,
      to: "./stories/2024-09-22-Stephanie&Soumyadeep",
      details: "Bhargesh & Yesha // Goa //",
    },
    {
      img: LancyPavan,
      to: "./stories/2024-11-05-Lancy&Pavan",
      details: "Lancy & Pavan // kashmir //",
    },
  ];
  return (
    <div className="Home_view">
      <div className="center_Home_view">
        {/* image slider section 1  */}
        <div>
          <ImageSlider images={Slider_1} />
          <section className="Home_content_section_1">
            <div className="data_division">
              <h1>"You Feel. I Focus. We Frame”</h1>
              <p>
                A wedding is a validation coupled with the showcase of Love
                inclusive of <br />
                various events with exotic venues, food, guests, dresses,
                jewellery and so on-
                <br /> What if it could never be recorded?
              </p>
              <p>
                A chronology of a couple’s journey where they vow together to be
                <b> One</b>.
              </p>
            </div>
          </section>
        </div>

        {/* image slider section 2  */}
        <div className="home_section_2">
          <p>We are creating fiction out of reality</p>
          <GridSlider Images={Slider_2} />
        </div>

        <section className="Home_content_section_1">
          <div className="other_section">
            <h1>REAL LOVE STORIES</h1>
            <p>
              LIKE A RIVER FLOWS SURELY TO THE SEA, SO IT GOES SOME THINGS ARE
              MEANT TO BE.
            </p>
          </div>

          <div className="Home_card_section">
            <div className="cards">
              {HomeCards.map((card, index) => {
                return (
                  <div className="card" key={index}>
                    <Link to={card.to}>
                      <img src={card.img} alt="Images Not Found" />
                    </Link>
                    <div className="short_details_of_card">
                      <p>{card.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
