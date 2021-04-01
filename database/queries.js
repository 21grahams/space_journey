const connection = require('./index.js')


//===========================
//      ENTER USER INFO
//===========================
const postUserInfo = (user, cb) => {
  console.log('HAVE WE MADE IT HERE?', user)
  connection.query('INSERT INTO users (name, email) VALUES (?, ?)', user, (err, results) => {
    if (err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  });
};

//===========================
//      POST FAVORITE
//===========================
const postFavorite = (pics, cb) => {
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
  postUserInfo,
  postFavorite
};