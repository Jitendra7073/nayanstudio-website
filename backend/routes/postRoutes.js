const express = require("express");
const router = express.Router();
const Post = require("../Model/Post");

router.post("/like", async (req, res) => {
  const { heading, action, likeFrom } = req.body;

  try {
    let post = await Post.findOne({ heading });

    if (!post) {
      // If the post doesn't exist, create it
      post = new Post({ heading, likeCount: 0, likeFrom: [] });
    }

    if (action === "like") {
      if (!post.likeFrom.includes(likeFrom)) {
        post.likeFrom.push(likeFrom); // Track the location of the like
        post.likeCount += 1; // Increment the like count
        await post.save();

        // Broadcast updated like count via WebSocket
        req.app
          .get("io")
          .emit("likeUpdated", { heading, likeCount: post.likeCount });
      } else {
        return res
          .status(400)
          .json({ message: "User has already liked this post" });
      }
    }

    res
      .status(200)
      .json({ likeCount: post.likeCount, likeFrom: post.likeFrom });
  } catch (error) {
    console.error("Error handling like action:", error);
    res.status(500).json({ message: "Error handling like action" });
  }
});

module.exports = router;
