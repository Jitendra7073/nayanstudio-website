import React from "react";
import Footer from "../../../../components/footer";
import StoriesPost from "../../Components/Story_design";
import { LancyPavan } from "../../../../assets/images/Stories_page";
import "../pages_comman.css";
import storiesData from "../data.json"; 

import "react-lazy-load-image-component/src/effects/blur.css"; // Include blur effect styles

const Page3 = () => {
  const importAll = (requireContext) =>
    requireContext.keys().map(requireContext);
  const SImages = importAll(
    require.context(
      "../../../../assets/images/All photos/S",
      false,
      /\.(png|jpe?g|JPG|webp|svg)$/
    )
  );
    // Fetch story by its name
    const Story = storiesData.find(
      (story) => story.Header === "Stephanie & Soumyadeep [ Goa ]"
    );
  return (
    <div>

      {Story && (
        <StoriesPost
          BackgroundPoster={LancyPavan} 
          ImageHeading={Story.Header}
          Header={Story.Header}
          StoryDate={Story.StoryDate}
          content={Story.content} 
          Redirection={Story.Redirection}
        />
      )}


      <div className="Images_gallery_outer">
        <div className="Images_gallery">
          {SImages.map((photos, index)  => (
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

export default Page3;
