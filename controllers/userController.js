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

module.exports = {
  getAllUsers,
};
