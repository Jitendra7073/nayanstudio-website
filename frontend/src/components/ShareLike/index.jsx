import React, { useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
// share and like component style
import "./Share-Like-style.css";

const ShareLike = ({ heading, content, likeFrom }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const BASE_URL = "http://localhost:5000"; // Replace with your backend URL
  const BASE_URL = "https://nayanstudio-backend.onrender.com"; // Replace with your backend URL

  // Socket.IO connection
  const socket = io(BASE_URL);

  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        const storedLikes = localStorage.getItem("likedPosts") || "{}";
        const likedPosts = JSON.parse(storedLikes);

        if (likedPosts[heading]) {
          setIsLiked(true); // User has already liked this post
        }

        // Fetch like count from the server
        const response = await axios.post(`${BASE_URL}/api/posts/like`, {
          heading,
          action: "fetch",
          likeFrom,
        });

        setLikeCount(response.data.likeCount);
      } catch (error) {
        console.error("Error fetching like count:", error);
      }
    };

    fetchLikeCount();

    // Listen for real-time updates from the server
    socket.on("likeUpdated", (data) => {
      if (data.heading === heading) {
        setLikeCount(data.likeCount);
      }
    });

    // Cleanup socket on component unmount
    return () => {
      socket.disconnect();
    };
  }, [heading, likeFrom, socket]);

  const handleLike = async () => {
    if (isLiked) return; // Prevent multiple likes

    try {
      const response = await axios.post(`${BASE_URL}/api/posts/like`, {
        heading,
        action: "like",
        likeFrom,
      });

      setLikeCount(response.data.likeCount);
      setIsLiked(true);

      // Store in localStorage to prevent multiple likes
      const storedLikes = localStorage.getItem("likedPosts") || "{}";
      const likedPosts = JSON.parse(storedLikes);
      likedPosts[heading] = true;
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));

      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleShare = (platform) => {
    const message = `
      ${heading} 
      \n
      ${content} 
      More details: ${window.location.href}
      \n
      Shared by: NayanStudio
    `;

    if (platform === "twitter") {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        message
      )}`;
      window.open(twitterUrl, "_blank");
    } else if (platform === "whatsapp") {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    } else if (platform === "facebook") {
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`;
      window.open(facebookUrl, "_blank");
    }
  };

  return (
    <div className="post-functionality">
      <div className="post-comment-share">
        <div className="menu-container">
          <div className="menu-icon" onClick={toggleMenu}>
            <p className="share">Share</p>
          </div>
          {isMenuOpen && (
            <div className="dropdown-menu">
              <button
                className="menu-item twitter"
                onClick={() => handleShare("twitter")}
              >
                <FaTwitter className="menu-icon-item" /> Twitter
              </button>
              <button
                className="menu-item whatsapp"
                onClick={() => handleShare("whatsapp")}
              >
                <FaWhatsapp className="menu-icon-item" /> WhatsApp
              </button>
              <button
                className="menu-item facebook"
                onClick={() => handleShare("facebook")}
              >
                <FaFacebook className="menu-icon-item" /> Facebook
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className={`like ${isAnimating ? "like-animating" : ""}`}
        onClick={handleLike}
        style={{ cursor: "pointer" }}
      >
        <div className="like-icon">
          {isLiked ? <FcLike /> : <FcLikePlaceholder />}
        </div>
        <div className="like-text">
          <p>{likeCount} Likes</p>
        </div>
      </div>
    </div>
  );
};

export default ShareLike;
