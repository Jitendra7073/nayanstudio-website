import React, { useEffect } from "react";
import ImageSlider from "../../components/Image_slider";
import GridSlider from "../../components/Grid_image_Slider";
import { Link } from "react-router-dom";
import "./Home_page.css";
import Bhageyakhevana from "../../assets/images/All photos/J/img.webp";
import LancyPavan from "../../assets/images/All photos/K/img.webp";
import StephanieSoumyadeep from "../../assets/images/All photos/YS/036.webp";

// Function to shuffle an array
const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

// Slider 1 images
const Slider_1 = [
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998122/j3_zvzgou.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998116/j2_ofhlvy.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742997689/slide1.3_p52bvy.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998198/017_5_11zon_liernv.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998196/018_6_11zon_isrzur.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998191/005_1_11zon_a6zawy.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998186/012_4_11zon_sepch1.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742997690/slide1.1_jdue9w.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998161/UME_6561_3_11zon_hin0rd.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998160/KAM_6445_9_11zon_wnkmng.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742997691/slide1.5_m9uyry.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742997687/slide1.6_ebfn8k.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742997682/slide1.2_kavod3.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998207/122_5_11zon_z35pe2.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998209/066_3_11zon_jkqoub.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998213/152_5_11zon_agcphh.webp",
];

// Slider 2 images
const Slider_2 = [
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996256/img10_igkaqs.jpg",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996258/img11_luepdg.jpg",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996263/img1_hjv6qj.jpg",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996265/img9_acwpoe.jpg",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996278/img3_vlejo0.jpg",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996283/img2_ljcsih.jpg",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996286/img4_jglc45.jpg",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996295/img6_kmibrw.jpg",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996298/img5_fugjnv.jpg",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996306/img8_bmm9vj.jpg",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996306/img7_k9bkyk.jpg",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996389/img12_e9glqb.jpg",
];

const Home = () => {
  // Change document title
  useEffect(() => {
    document.title = "Home | Nayan Studio";
  }, []);

  // Shuffle the images for each slider
  const shuffledSlider1 = shuffleArray(Slider_1);
  const shuffledSlider2 = shuffleArray(Slider_2);

  // Cards data
  const HomeCards = [
    {
      img: Bhageyakhevana,
      to: "./stories/Bhagyesh&Khevana",
      details: "Bhagyesh & Khevana // Jaisalmer //",
    },
    {
      img: StephanieSoumyadeep,
      to: "./stories/Yasha&Bhargesh",
      details: "Bhargesh & Yesha // Goa //",
    },
    {
      img: LancyPavan,
      to: "./stories/Lancy&Pavan",
      details: "Lancy & Pavan // Kashmir //",
    },
  ];

  return (
    <div className="Home_view">
      <div className="center_Home_view">
        {/* Image slider section 1 */}
        <div>
          <ImageSlider images={shuffledSlider1} />
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

        {/* Image slider section 2 */}
        <div className="home_section_2">
          <p>We are creating fiction out of reality</p>
          <GridSlider Images={shuffledSlider2} />
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
              {HomeCards.map((card, index) => (
                <div className="card" key={index}>
                  <Link to={card.to} target="_blank">
                    <img src={card.img} alt="Images Not Found" />
                  </Link>
                  <div className="short_details_of_card">
                    <p>{card.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
