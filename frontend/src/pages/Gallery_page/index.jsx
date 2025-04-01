import React, { useEffect } from "react";
import SampleView from "./Gallery_Format"; // Component to display each post
// import css
import "./Gallery_page.css";

const jaishalmerImages = [
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998122/j3_zvzgou.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998118/j1_ovlyv3.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998116/j2_ofhlvy.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742997689/slide1.3_p52bvy.webp",
];
const kashmirImages = [
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998161/UME_6561_3_11zon_hin0rd.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998160/KAM_6445_9_11zon_wnkmng.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742997691/slide1.5_m9uyry.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742997687/slide1.6_ebfn8k.webp",
];
const goaImages = [
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996223/0983_3_11zon_kczwb7.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996215/1309_6_11zon_e8yzex.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742996215/174_4_11zon_ht1oie.webp",
];
const stephanieSoumyadeepImages = [
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998198/017_5_11zon_liernv.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998196/018_6_11zon_isrzur.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998191/005_1_11zon_a6zawy.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998186/012_4_11zon_sepch1.webp",
  "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742997690/slide1.1_jdue9w.webp",
];

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
    
    
  ];

  return (
    <div className="Gallery_Full_view">
      <div className="inner_view">
        {postData.map((post, index) => (
          <SampleView
            key={index}
            heading={post.heading}
            // date={post.date} 
            sliderImages={post.sliderImages}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
