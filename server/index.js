const express = require('express')
const app = express()
const port = 3000
const config = require('../config/config.js')
const axios = require('axios');
const path = require('path')

//=====================
//     Middleware
//=====================
app.use(express.json()); // => req.body
app.use(express.static(path.join(__dirname, '..', 'dist')));

//=====================
//      Routes
//=====================

//======get photos==========
app.get('/photos', (req, res) => {
  axios({method: 'get',
  headers: {'Authorization': config.config},
  url: `https://api.nasa.gov/planetary/apod/?api_key=${config.config}`,
})
.then(response => {
    res.status(200).send(response.data)
  })
  .catch(err => {
    res.status(err.response.status).send(err.response.data)
  })
})


//=============================================
//=============================================


//=========spinning up the server=============
app.listen(port, () => {
  console.log(`Graham's Space App listening at http://localhost:${port}`)
})