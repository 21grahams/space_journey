const express = require("express");
const app = express();
const port = 3000;
const config = require("../config/config.js");
const axios = require("axios");
const path = require("path");
const db = require("../database/queries.js");
const cors = require("cors");

//=====================
//     Middleware
//=====================
app.use(express.json()); // => req.body
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(cors());

//=====================
//      Routes
//=====================

//==========get APOD photos============
app.get("/photos", (req, res) => {
  axios({
    method: "get",
    url: `https://api.nasa.gov/planetary/apod/?api_key=${config.config}`,
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
});

//==========get Mars Photos photos============
app.get("/mars", (req, res) => {
  axios({
    method: "get",
    url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${config.config}`,
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
});

//==========post user============
app.post("/user", (req, res) => {
  console.log("req.body: ", req.body);
  let fullBody = [req.body.name, req.body.email];
  db.postUserInfo(fullBody, (err, results) => {
    if (err) {
      console.log("ERROR WITH POST REQUEST: ", err);
      res.status(404).send("FAILED");
    } else {
      res.status(201).send("POSTED!");
    }
  });
});

//==========post favorites============
app.post("/photos", (req, res) => {
  console.log("req.body: ", req.body);
  let fullBody = [req.body.url, req.body.title, req.body.description];
  db.postFavorite(fullBody, (err, results) => {
    if (err) {
      console.log("ERROR WITH POST REQUEST: ", err);
      res.status(404).send("FAILED");
    } else {
      res.status(201).send("POSTED!");
    }
  });
});

//=============================================
//=============================================

//=========spinning up the server=============
app.listen(port, () => {
  console.log(`Graham's Space App listening at http://localhost:${port}`);
});
