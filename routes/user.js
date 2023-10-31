const express = require("express");

const router = express.Router();
const user = require("../controllers/userController");

router.route("/getusers").get(user.getAllUsers);


module.exports = router;