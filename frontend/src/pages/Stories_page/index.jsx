import React, { useEffect } from "react";
import StoriesPost from "./Components/Story_design";

import { Link } from "react-router-dom";
import "./Stories_page.css";

const Stories = () => {
  const BhagyeshKhevana =
    "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998030/poster_1_ummuzq.jpg";
  const LancyPavan =
    "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998031/poster_2_roxkzn.jpg";
  const BhramasiniSwetanshu =
    "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998031/poster_3_pyggom.jpg";
  const VishalShreya =
    "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998029/poster_4_jo6fzu.jpg";
  const YeshaBhargesh =
    "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998030/poster_5_jdc69k.jpg";
  const PriyajRushali =
    "https://res.cloudinary.com/dr2izxsrr/image/upload/v1742998030/poster_6_npu2xc.jpg";
  useEffect(() => {
    document.title = "Stories | Nayan Studio";
  }, []);
  const StoryData = [
    {
      BackgroundPoster: BhagyeshKhevana,
      Header: "Bhagyesh & Khevana (Love Marriage)",
      StoryDate: "October 17, 2024",
      content:
        "Bhagyesh and Khevana’s love grew from a deep understanding and mutual respect, building a bond that was both genuine and enduring. Their connection was effortless, a natural evolution of two people finding not just a partner but a true companion. Their wedding was an enchanting affair, marked by vibrant colors and an atmosphere full of warmth, reflecting the life they were beginning together. The ceremony captured the essence of their love—simple, beautiful, and full of joy. Bhagyesh and Khevana’s story shows that love isn’t just about grand gestures but about the quiet moments of connection that create a lifetime of memories.",
      Redirection: "./Bhagyesh&Khevana",
    },
    {
      BackgroundPoster: LancyPavan,
      Header: "Lancy & Pavan (Arrange Marriage)",
      StoryDate: "November 5, 2024",
      content:
        "Lancy and Pavan's love blossomed beautifully from an arranged marriage, where two strangers grew into soulmates. Their relationship was nurtured through conversations, shared values, and a deep connection that developed naturally. Their wedding was a heartfelt celebration, reflecting their journey together—simple yet full of life. The vibrant decorations and joyous atmosphere mirrored their love, which flourished as they discovered the beauty of being with someone who complements them perfectly. Lancy and Pavan’s bond is a true testament to how love can be a journey of discovery, filled with harmony, respect, and lasting happiness.",
      Redirection: "./Lancy&Pavan",
    },

    {
      BackgroundPoster: VishalShreya,
      Header: "Vishal & Shreya (Arrange Marriage)",
      StoryDate: "December 12, 2024",
      content:
        "Vishal and Shreya’s love story began with an arranged marriage, but what unfolded between them was nothing short of magical. When Shreya fell ill, Vishal’s unwavering support and kindness left a lasting impression, showing her that this was more than just a match—it was a partnership built on deep care and understanding. For Vishal, it was clear from the very start that Shreya was his destiny, the one he had always been meant to be with. Their wedding, held at the stunning Rambagh Fort in Jaipur, was a celebration of their love, with breathtaking decorations that reflected the elegance of their bond. The journey to their special day also included a beautiful riverside proposal, where Vishal, surrounded by serene settings, asked Shreya to be his forever. Their story is a testament to the beauty of finding love not just through fate, but through a deep connection that grows and strengthens over time.",
      Redirection: "./Vishal&Shreya",
    },
    {
      BackgroundPoster: BhramasiniSwetanshu,
      Header: "Bhramasini & Shwetanshu (Love-Cum-Arrange)",
      StoryDate: "December 12, 2024",
      content:
        "Bhramasini and Shwetanshu’s love story is a unique blend of tradition and choice. Their marriage began as an arranged match, but as they spent time together, a beautiful love blossomed between them. Their connection grew organically, with both partners discovering how deeply they complemented one another. Their wedding, a harmonious mix of traditional and modern elements, was a reflection of their shared journey—an event that celebrated both the joy of finding love and the beauty of bringing two families together. Bhramasini and Shwetanshu’s union proves that sometimes love is a combination of destiny and choice, creating something truly magical",
      Redirection: "./Bhramasini&Shwetanshu",
    },
    {
      BackgroundPoster: PriyajRushali,
      Header: "Priyaj & Rushali (Love Marriage)",
      StoryDate: "December 12, 2024",
      content:
        "Priyaj and Rushali's love story is one of serendipity and choice, where their hearts found each other in a way that felt both inevitable and exciting. From the moment they met, they knew they were meant to be together, and their love only grew stronger with time. Their wedding day was a reflection of their beautiful connection—filled with laughter, joy, and moments that felt like they were straight out of a dream. Surrounded by family and friends, their union was a celebration of love that had been carefully nurtured, blossoming into something extraordinary. Priyaj and Rushali's journey together is a beautiful reminder that when two hearts are destined to be together, everything else falls into place.",
      Redirection: "./Priyaj&Rushali",
    },
    {
      BackgroundPoster: YeshaBhargesh,
      Header: "Yesha & Bhargesh (Arrange Marriage)",
      StoryDate: "October 13, 2022",
      content:
        "Yesha and Bhargesh's marriage began with a foundation of respect and understanding, but it quickly grew into something far deeper. Their journey together was one of discovery, where they found strength in each other’s presence and trust in the relationship they were building. Their wedding, a blend of tradition and elegance, was a reflection of their evolving bond. Surrounded by loved ones, the ceremony was a celebration not just of their union but of the partnership they had formed, full of promise and shared dreams. Yesha and Bhargesh’s story is a reminder that true love can emerge from the most unexpected beginnings, growing stronger over time.",
      Redirection: "./Yasha&Bhargesh",
    },
  ];
  return (
    <div>
      {StoryData.map((StoryData, index) => {
        return (
          <StoriesPost
            key={index}
            BackgroundPoster={StoryData.BackgroundPoster}
            Header={StoryData.Header}
            StoryDate={StoryData.StoryDate}
            content={StoryData.content}
            readMore={StoryData.Redirection}
            display={true}
          />
        );
      })}
      <div className="view_more_button">
        <Link to="/videos">
          <div className="pre-wedding-redirection">View more videos</div>
        </Link>
      </div>
    </div>
  );
};

export default Stories;
