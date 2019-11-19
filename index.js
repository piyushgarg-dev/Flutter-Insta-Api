const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(cors());

const PORT = process.env.PORT || 4000;

const Post = require("./models/Post");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
mongoose
  .connect(
    "mongodb+srv://gargpiyush195:jkjk1806@cluster0-vh1hd.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => console.log(err));

app.get("/post", (req, res) => {
  Post.find({}, (err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.json(doc.reverse());
    }
  });
});

app.post("/post", (req, res) => {
  const { userpic, name, image, caption } = req.body;

  let post = new Post();

  post.userpic = userpic;
  post.name = name;
  post.image = image;
  post.caption = caption;

  post
    .save()
    .then(doc => {
      console.log("Post Saved!");
      console.log(doc);
      res.send(doc);
    })
    .catch(err => console.log(err));
});

app.listen(PORT, () => console.log(`Server Started on ${PORT}`));
