const db = require("../db/connect");

const getAllUsers = async (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to retrieve users" });
    } else {
        console.log("User list is ",results);
      res.status(200).json({ users: results }); // Assuming the results variable contains the users
    }
  });
};

const getUserByName = async (req, res) => {

    const userName=req.params.userName;
    db.query(
        "SELECT * FROM users WHERE user = ?",
        userName,
        (err, results) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to retrieve user by name" });
          } else {
            console.log(`User is `, results);
            res.status(200).json({ user: results });
          }
        }
      );
  };

module.exports = {
  getAllUsers,
  getUserByName
};
