import React from "react";
import StoriesPost from "../../Components/Story_design";
import "../pages_comman.css";
import storiesData from "../data.json";
import "react-lazy-load-image-component/src/effects/blur.css"; // Include blur effect styles

const Page2 = () => {
  const LancyPavan =
    "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998031/poster_2_roxkzn.jpg";
  const importAll = (requireContext) =>
    requireContext.keys().map(requireContext);
  const kashmirImages = importAll(
    require.context(
      "../../../../assets/images/All photos/K",
      false,
      /\.(png|jpe?g|JPG|webp|svg)$/
    )
  );

  // Fetch story by its name
  const secondStory = storiesData.find(
    (story) => story.Header === "Lancy & Pavan (Arrange Marriage)"
  );
  return (
    <div>
      {secondStory && (
        <StoriesPost
          BackgroundPoster={LancyPavan}
          ImageHeading={secondStory.Header}
          ImageSubHeading="[ Kashmir ]"
          Header={secondStory.Header}
          StoryDate={secondStory.StoryDate}
          content={secondStory.content}
          Redirection={secondStory.Redirection}
        />
      )}

      <div className="Images_gallery_outer">
        <div className="Images_gallery">
          {kashmirImages.map((photos, index) => (
            <div className="gallery_image_div" key={index}>
              <img
                src={photos}
                alt="Image not found"
                className="gallery_image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2;
