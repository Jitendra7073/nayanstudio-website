import React from "react";
import Footer from "../../../../components/footer";
import StoriesPost from "../../Components/Story_design";
// import { Poster5 } from "../../../../assets/images/Stories_page";
import "../pages_comman.css";
import storiesData from "../data.json";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Include blur effect styles

const Page4 = () => {
  const importAll = (requireContext) =>
    requireContext.keys().map(requireContext);
  const SImages = importAll(
    require.context(
      "../../../../assets/images/All photos/Y",
      false,
      /\.(png|jpe?g|JPG|webp|svg)$/
    )
  );
  // Fetch story by its name
  const fourthStory = storiesData.find(
    (story) => story.Header === "Yash & Shraddha [ Stephanie & Soumyadeep ]"
  );

  return (
    <div>
      {fourthStory && (
        <StoriesPost
          // BackgroundPoster={Poster5}
          ImageHeading={fourthStory.Header}
          ImageSubHeading="[ Jaishalmer ]"
          Header={fourthStory.Header}
          StoryDate={fourthStory.StoryDate}
          content={fourthStory.content}
          Redirection={fourthStory.Redirection}
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

export default Page4;
