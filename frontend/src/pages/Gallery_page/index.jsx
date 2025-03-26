  import React, { useEffect } from "react";
  import SampleView from "./Gallery_Format"; // Component to display each post
  // import css
  import "./Gallery_page.css";
  // load all images using function requireContext
  const importAll = (requireContext) => requireContext.keys().map(requireContext);

  // Dynamically load images for each slider
  const jaishalmerImages = importAll(
    require.context(
      "../../assets/images/Gallery_page/Jaishalmer",
      false,
      /\.(png|jpe?g|JPG|webp|svg)$/ // Match image file extensions
    )
  );  
  const kashmirImages = importAll(
    require.context(
      "../../assets/images/Gallery_page/kashmir",
      false,
      /\.(png|jpe?g|JPG|webp|svg)$/
    )
  );
  const goaImages = importAll(
    require.context(
      "../../assets/images/Gallery_page/Goa",
      false,
      /\.(png|jpe?g|JPG|webp|svg)$/
    )
  );
  const stephanieSoumyadeepImages = importAll(
    require.context(
      "../../assets/images/Gallery_page/Stephanie_Soumyadeep",
      false,
      /\.(png|jpe?g|JPG|webp|svg)$/
    )
  );
  const yeshaBhargeshImages = importAll(
    require.context(
      "../../assets/images/Gallery_page/Yesha_Bhargesh",
      false,
      /\.(png|jpe?g|JPG|webp|svg)$/
    )
  );

  const Index = () => {
    // change top title
    useEffect(() => {
      document.title = "Gallery | Nayan Studio";
    }, []);
    // Post data with unique image arrays for each slider
    const postData = [
      {
        heading: "Bhagyesh & Khevana  [ Love Marriage ]",
        date: "October 17, 2024",
        content:
          "Bhagyesh and Khevana’s love grew from a deep understanding and mutual respect, building a bond that was both genuine and enduring. Their connection was effortless, a natural evolution of two people finding not just a partner but a true companion. Their wedding was an enchanting affair, marked by vibrant colors and an atmosphere full of warmth, reflecting the life they were beginning together. The ceremony captured the essence of their love—simple, beautiful, and full of joy. Bhagyesh and Khevana’s story shows that love isn’t just about grand gestures but about the quiet moments of connection that create a lifetime of memories.",
        sliderImages: jaishalmerImages, // Assign dynamically loaded images
        venue: "Not Given",
      },
      {
        heading: "Lancy & Pavan [ Arrange Marriage ]",
        date: "November 5, 2024",
        content:
          "Lancy and Pavan's love blossomed beautifully from an arranged marriage, where two strangers grew into soulmates. Their relationship was nurtured through conversations, shared values, and a deep connection that developed naturally. Their wedding was a heartfelt celebration, reflecting their journey together—simple yet full of life. The vibrant decorations and joyous atmosphere mirrored their love, which flourished as they discovered the beauty of being with someone who complements them perfectly. Lancy and Pavan’s bond is a true testament to how love can be a journey of discovery, filled with harmony, respect, and lasting happiness.",
        sliderImages: kashmirImages, // Assign dynamically loaded images
        venue: "Not Given",
      },
      {
        heading: "Yesha & Bhagyesh  [ Arrange Marriage ]",
        date: "September 22, 2024",
        content:
          "Priya and Manish’s wedding was a blend of modern and traditional elements. The ceremony took place at a luxurious resort, followed by a beautiful reception where family and friends gathered to celebrate. Their wedding was all about elegance, with beautiful floral decorations and an enchanting atmosphere that made the day unforgettable.",
        sliderImages: goaImages,
        venue: "Not Given",
      },
      {
        heading: "Stephanie & Soumyadeep [ Arrange Marriage ]",
        date: "December 12, 2024",
        content:
          "Yesha and Shraddha marriage began with a foundation of respect and understanding, but it quickly grew into something far deeper. Their journey together was one of discovery, where they found strength in each other’s presence and trust in the relationship they were building. Their wedding, a blend of tradition and elegance, was a reflection of their evolving bond. Surrounded by loved ones, the ceremony was a celebration not just of their union but of the partnership they had formed, full of promise and shared dreams. Yesha and Shraddha story is a reminder that true love can emerge from the most unexpected beginnings, growing stronger over time.",
        sliderImages: stephanieSoumyadeepImages,
        venue: "Not Given",
      },
      {
        heading: "Yesha & Bhargesh",
        date: "January 10, 2025",
        content:
          "Yesha and Bhargesh's marriage began with a foundation of respect and understanding, but it quickly grew into something far deeper. Their journey together was one of discovery, where they found strength in each other’s presence and trust in the relationship they were building. Their wedding, a blend of tradition and elegance, was a reflection of their evolving bond. Surrounded by loved ones, the ceremony was a celebration not just of their union but of the partnership they had formed, full of promise and shared dreams. Yesha and Bhargesh’s story is a reminder that true love can emerge from the most unexpected beginnings, growing stronger over time.",
        sliderImages: yeshaBhargeshImages,
        venue: "Not Given",
      },
    ];

    return (
      <div className="Gallery_Full_view">
        <div className="inner_view">
          {postData.map((post, index) => (
            <SampleView
              key={index}
              heading={post.heading}
              date={post.date}
              // content={post.content}
              sliderImages={post.sliderImages} // Pass appropriate images
              // venue={post.venue}
            />
          ))}
        </div>
      </div>
    );
  };

  export default Index;
