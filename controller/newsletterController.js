// controllers/newsletterController.js
const mysql = require('mysql2');
require('dotenv').config();

// Create a MySQL connection pool (reuse your existing pool)
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',         
//     password: 'nopassword', 
//     database: 'linkincargo' 
// });

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

exports.subscribeNewsletter = (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }
  
  pool.query('INSERT INTO subscribers (email) VALUES (?)', [email], (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error' });
    }
    return res.status(200).json({ message: 'Subscription successful!' });
  });
};

// New controller action to update a subscriber's email
exports.updateNewsletter = (req, res) => {
  const subscriberId = req.params.id;
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required for update.' });
  }

  // Update the subscriber's email in the database
  pool.query(
    'UPDATE subscribers SET email = ? WHERE id = ?',
    [email, subscriberId],
    (error, results) => {
      if (error) {
        console.error('Database update error:', error);
        return res.status(500).json({ message: 'Database update error' });
      }
      
      // Optionally, check if any rows were affected
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Subscriber not found.' });
      }
      
      return res.status(200).json({ message: 'Update successful!' });
    }
  );
};
