// src/config.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'espelho_d_alma', 
});

const promisePool = pool.promise();

module.exports = promisePool;
