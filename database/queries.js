const connection = require('./index.js')


//===========================
//      POST FAVORITE
//===========================
const getSpacePictures = (pics, cb) => {
  console.log('HAVE WE MADE IT HERE?', pics)
  connection.query('INSERT INTO favorites (url, title, description) VALUES (?, ?, ?)', pics, (err, results) => {
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