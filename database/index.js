const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'dataSpace'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Query Get Request
const getSpacePictures = cb => {
  connection.query('SELECT * FROM favorites', (err, results) => {
    if (err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  });
};


module.exports = {
  getSpacePictures
};
