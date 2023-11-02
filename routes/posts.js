const express = require("express");

const router = express.Router();
const post = require("../controllers/postController");

router.route("/getPost").get(post.getPosts);
router.route("/getPostByGroup").get(post.getPostByGroup);
router.route("/addPost").post(post.addPost);


module.exports = router;
