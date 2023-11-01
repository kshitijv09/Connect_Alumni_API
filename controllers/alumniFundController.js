const db = require("../db/connect");

const getAllDonations = async (req, res) => {
  db.query("SELECT * FROM fund", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to retrieve funds" });
    } else {
      console.log("List of funds is", results);
      res.status(200).json({ funds: results });
    }
  });
};

const addDonation = async (req, res) => {
  const { donation_id, amount, date,description,alumni_name } = req.body;
  db.query(
    "INSERT INTO fund (donation_id, amount, date,description,alumni_name ) VALUES (?, ?, ?, ?, ?)",
    [donation_id,amount,date,description,alumni_name],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to add donation" });
      } else {
        console.log("Donation added successfully");
        res.status(201).json({ message: "Donation added successfully" });
      }
    }
  );
};

const getDonationByAlumni = async (req, res) => {
  const alumniName = req.params.alumni_name;
  db.query(
    "SELECT * FROM fund WHERE alumni_name = ?",
    alumniName,
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to retrieve dontation by alumni" });
      } else {
        console.log(`Dontations by ${alumniName} are `, results);
        res.status(200).json({ alumni: results });
      }
    }
  );
};

module.exports = {
 getAllDonations,
 addDonation,
 getDonationByAlumni
};
