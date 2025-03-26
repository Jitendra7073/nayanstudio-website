import React from "react";
import "./Story_design_style.css";
import { Link } from "react-router-dom";
import ShareLike from "../../../../components/ShareLike";

const StoriesPost = ({
  BackgroundPoster,
  Header,
  StoryDate,
  content,
  readMore,
  display,
}) => {
  return (
    <div className="spacing">
      <div className="Stories_design_container">
        <header className="Stories_design_header">
          <Link to={readMore}>
            <img
              className="Stories_design_header_image"
              src={BackgroundPoster}
              alt="Poster not found !!"
              loading="lazy"
            />
          </Link>
        </header>

        <main className="Stories_design_content">
          <h2 className="Stories_design_title">
            <Link to={readMore}>{Header}</Link>
          </h2>
          <p className="Stories_design_date">{StoryDate}</p>
          <p className="Stories_design_divider">{content ? content : ""}</p>

          {display && (
            <div className="read_more_Stories">
              <Link to={readMore} className="Stories_design_read_more">
                Read More
              </Link>
            </div>
          )}

          <ShareLike heading={Header} content={content} likeFrom="Stories" />
        </main>
      </div>
    </div>
  );
};

export default StoriesPost;
