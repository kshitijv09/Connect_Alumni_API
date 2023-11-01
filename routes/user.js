const express = require("express");

const router = express.Router();
const user = require("../controllers/userController");

router.route("/getusers").get(user.getAllUsers);
router.route("/getusers/:userName").get(user.getUserByName)


module.exports = router;