const mongoose = require("mongoose");

const PostScheme = mongoose.Schema({
  userpic: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  }
});

const Posts = mongoose.model("Posts", PostScheme);

module.exports = Posts;
