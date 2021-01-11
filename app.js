// jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

app.use(express.static(__dirname));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
  });

  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 8000;
  }


app.listen(port, function() {
    console.log("Server running");
  });