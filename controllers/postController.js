const db=require("../db/connect")


const getPosts=async(req,res)=>{
  db.query("SELECT * FROM posts", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to retrieve users" });
    } else {
        console.log("List of Posts is ",results);
      res.status(200).json({ posts: results }); // Assuming the results variable contains the users
    }
  });
}

const getPostByGroup=async(req,res)=>{
  db.query("SELECT * FROM posts where posts.groups='alumni' ", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to retrieve users" });
    } else {
        console.log("List of Posts is ",results);
      res.status(200).json({ posts: results }); // Assuming the results variable contains the users
    }
  });
}

const addPost = async (req, res) => {
    const { name,title, content,groups } = req.body;
    db.query(
      "INSERT INTO posts (name, title, content,groups) VALUES (?, ?,?,?)",
      [name,title, content,groups],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: "Failed to add post" });
        } else {
          console.log("Post added successfully");
          res.status(201).json({ message: "Post added successfully" });
        }
      }
    );
  };
  

module.exports={
addPost,
getPosts,
getPostByGroup
}