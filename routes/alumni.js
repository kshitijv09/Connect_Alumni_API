const express = require("express");

const router = express.Router();
const alumni = require("../controllers/alumniController");

router.route("/getAlumni").get(alumni.getAllAlumni);
router.route("/addAlumni").post(alumni.addAlumni);
router.route("/getAlumni/:company").get(alumni.getAlumniByCompany);
router.route("/getAlumniByYear/:grad_year").get(alumni.getAlumniByGraduationYear);

module.exports = router;
