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
  const { alumni_id, name, grad_year, contact_info, company,groups } = req.body;
  db.query(
    "INSERT INTO alumni (alumni_id, name, grad_year, contact_info, company,groups) VALUES (?, ?, ?, ?, ?,?)",
    [alumni_id, name, grad_year, contact_info, company,groups],
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


const updateAlumni = async (req, res) => {
  const { name, company, contact_info } = req.body;
  db.query(
    "UPDATE alumni SET company = ?, contact_info = ? WHERE name = ?",
    [company, contact_info, name],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to update alumni" });
      } else {
        if (result.affectedRows > 0) {
          console.log("Alumni updated successfully");
          res.status(200).json({ message: "Alumni updated successfully" });
        } else {
          console.log("Alumni not found");
          res.status(404).json({ error: "Alumni not found" });
        }
      }
    }
  );
};


const getAlumniByName = async (req, res) => {
    const alumniName = req.params.name;
    db.query(
      "SELECT * FROM alumni WHERE name = ?",
      alumniName,
      (err, results) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: "Failed to retrieve alumni by name" });
        } else {
          console.log(`Alumni is `, results);
          res.status(200).json({ alumni: results });
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

const getAlumniByGraduationYear = async (req, res) => {
    const grad_year = req.params.grad_year;
    db.query(
      "SELECT * FROM alumni WHERE grad_year = ?",
      grad_year,
      (err, results) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: "Failed to retrieve alumni by grad_year" });
        } else {
          console.log(`Alumni from batch of ${grad_year} are `, results);
          res.status(200).json({ alumni: results });
        }
      }
    );
  };

module.exports = {
  getAllAlumni,
  addAlumni,
  getAlumniByCompany,
  getAlumniByGraduationYear,
  getAlumniByName,
  updateAlumni
};
