const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
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