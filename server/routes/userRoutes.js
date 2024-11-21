const express = require('express');
const db = require('../db');  // Import the db connection

const router = express.Router();

// Example route to fetch users
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);  // Return results from the users table
  });
});

module.exports = router;
