const mysql = require('mysql2');
const dotenv = require('dotenv');

// Load environment variables from .env file 
dotenv.config();

// Create MySQL connection pool
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,   // Allows the pool to wait for connections to be available
  connectionLimit: 10,        // Limit the number of connections in the pool (adjustable)
  queueLimit: 0               // Max number of connection requests the pool can handle before returning an error
});

// Test the database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection error:', err.message);
  } else {
  console.log('Connected to the MySQL database.');
  connection.release(); // Release the connection back to the pool
  }
});

// Export the pool for use in other files 
module.exports = db;