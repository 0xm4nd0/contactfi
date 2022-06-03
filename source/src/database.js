const mysql = require('mysql');
const { promisify } = require('util');

const pool = mysql.createPool({
  connectionLimit: 5,
  host: 'mysql-service',
  user: 'root',
  password: 'password', 
  database: 'contacts'
});

pool.getConnection(function(err, conn) {
  if (err) throw err;
  else {
    console.log("Connection with mysql done successfully");
    conn.release();
  }
});

pool.query = promisify(pool.query);

module.exports = pool;
