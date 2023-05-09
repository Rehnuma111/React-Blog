const express = require("express");
const router = express.Router();
const Users = require("../models/postModel");

// POST method

router.post("/posts", async (req, res) => {
  try {
    const post = new Users(req.body);
    console.log(post);
    await post.save();
    return res.status(201).send(post);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Internal server error");
  }
});
///GET method
router.get("/getall", async (req, res) => {
  try {
    const allPosts = await Users.find();
    return res.status(201).send(allPosts);
  } catch (error) {
    return res.status(400).send({ error: err.message });
  }
});
// Get by id method
router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Users.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ message: "Post is not found!" });
    } else {
      return res.status(200).send({ message: "This is user post", post });
    }
  } catch (error) {
    return res.status(400).send({ error: err.message });
  }
});

module.exports = router;

//PUT method

router.patch("/update/:id", async (req, res) => {
  try {
    const post = await Users.findById(req.params.id);
    if (!post) {
      return res.status(404).send({ message: "post not found" });
    }

    post.set(req.body);
    await post.save();
    res.send({ message: "User updated successfully", post });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});
//delete method
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id)

  await Users.findByIdAndDelete(id)
    .then((data) => {
      console.log(data);
      return res.status(200).send({ message: "user deleted!" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send({ message: "Internal server error" });
    });
});
