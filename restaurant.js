var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
var reservations = [];
var waitingList = [];
var table = 5;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });

  app.get("/api/tables", function(req, res) {
    return res.json(reservations);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitingList);
  });

  app.post("/api/tables", function(req, res) {
    var reserved = req.body;
    reservations.push(reserved);
    res.json(reserved);
  });
  
  app.post("/api/waitlist", function(req, res) {
    var waiting = req.body;
    waitingList.push(waiting);
    res.json(waiting);
  });
  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });