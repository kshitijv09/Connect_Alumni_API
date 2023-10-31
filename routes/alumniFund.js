const express = require("express");

const router = express.Router();
const alumniFund = require("../controllers/alumniFundController");

router.route("/getDonations").get(alumniFund.getAllDonations);
router.route("/addDonation").post(alumniFund.addDonation);
router.route("/getDonations/:alumni_name").get(alumniFund.getDonationByAlumni);


module.exports = router;
