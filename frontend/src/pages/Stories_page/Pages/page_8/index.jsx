import React from "react";
import StoriesPost from "../../Components/Story_design";
import "../pages_comman.css";
import storiesData from "../data.json";
import "react-lazy-load-image-component/src/effects/blur.css"; // Include blur effect styles

const Page8 = () => {
  const PriyajRushali =
    "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998030/poster_6_npu2xc.jpg";
  const importAll = (requireContext) =>
    requireContext.keys().map(requireContext);
  const SImages = importAll(
    require.context(
      "../../../../assets/images/All photos/priyaj",
      false,
      /\.(png|jpe?g|JPG|webp|svg)$/
    )
  );

  // Fetch story by its name
  const Story = storiesData.find(
    (story) => story.Header === "Priyaj & Rushali (Love Marriage)"
  );
  return (
    <div>
      {Story && (
        <StoriesPost
          BackgroundPoster={PriyajRushali}
          ImageHeading={Story.Header}
          ImageSubHeading="[ Kashmir ]"
          Header={Story.Header}
          StoryDate={Story.StoryDate}
          content={Story.content}
          Redirection={Story.Redirection}
        />
      )}

      <div className="Images_gallery_outer">
        <div className="Images_gallery">
          {SImages.map((photos, index) => (
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

export default Page8;
