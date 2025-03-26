const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  heading: { type: String, required: true, unique: true },
  likeCount: { type: Number, default: 0 },
  likeFrom: [{ type: String }], // Changed to an array of strings
});

module.exports = mongoose.model("Post", PostSchema);
