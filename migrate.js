// migrate.js
const mysql = require('mysql2/promise');

async function runMigrations() {
  // Create a connection to your MySQL database
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',         
    password: 'nopassword', 
    database: 'linkincargo'       
  });

  await connection.query(`
    CREATE TABLE IF NOT EXISTS subscribers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log('Migrations ran successfully.');
  await connection.end();
}

runMigrations().catch(error => {
  console.error('Migration error:', error);
  process.exit(1);
});
