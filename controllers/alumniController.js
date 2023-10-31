const db = require("../db/connect");

const getAllAlumni = async (req, res) => {
  db.query("SELECT * FROM alumni", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to retrieve alumni" });
    } else {
      console.log("Alumni list is ", results);
      res.status(200).json({ alumni: results });
    }
  });
};

const addAlumni = async (req, res) => {
  const { alumni_id, name, grad_year, contact_info, company } = req.body;
  db.query(
    "INSERT INTO alumni (alumni_id, name, grad_year, contact_info, company) VALUES (?, ?, ?, ?, ?)",
    [alumni_id, name, grad_year, contact_info, company],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to add alumni" });
      } else {
        console.log("Alumni added successfully");
        res.status(201).json({ message: "Alumni added successfully" });
      }
    }
  );
};

const getAlumniByCompany = async (req, res) => {
  const companyName = req.params.company;
  db.query(
    "SELECT * FROM alumni WHERE company = ?",
    companyName,
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to retrieve alumni by company" });
      } else {
        console.log(`Alumni from ${companyName} are `, results);
        res.status(200).json({ alumni: results });
      }
    }
  );
};

module.exports = {
  getAllAlumni,
  addAlumni,
  getAlumniByCompany,
};
