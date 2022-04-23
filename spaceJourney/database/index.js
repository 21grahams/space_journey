const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1',
  database: 'dataSpace'
});

connection.connect((err) => {
  if (err) {
    console.log('ERROR WITH DATABASE: ', err);
  } else {
    console.log('Connected to MySQL!')
  }
});

module.exports = connection;