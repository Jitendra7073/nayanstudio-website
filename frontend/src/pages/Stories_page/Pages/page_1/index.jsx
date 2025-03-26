import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import StoriesPost from "../../Components/Story_design";
import storiesData from "../data.json";
import "../pages_comman.css";

const Page1 = () => {
  const BhagyeshKhevana =
    "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998030/poster_1_ummuzq.jpg";
  const importAll = (requireContext) =>
    requireContext.keys().map(requireContext);
  const jaishalmerImages = importAll(
    require.context(
      "../../../../assets/images/All photos/J",
      false,
      /\.(png|jpe?g|JPG|webp|svg)$/
    )
  );

  // Fetch story by its name
  const firstStory = storiesData.find(
    (story) => story.Header === "Bhagyesh & Khevana (Love Marriage)"
  );

  return (
    <div>
      {firstStory && (
        <StoriesPost
          BackgroundPoster={BhagyeshKhevana}
          ImageHeading={firstStory.Header}
          ImageSubHeading="[ Jaishalmer ]"
          Header={firstStory.Header}
          StoryDate={firstStory.StoryDate}
          content={firstStory.content}
          Redirection={firstStory.Redirection}
        />
      )}

      <div className="Images_gallery_outer">
        <div className="Images_gallery">
          {jaishalmerImages.map((photos, index) => (
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

export default Page1;
