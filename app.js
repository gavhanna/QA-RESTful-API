"use strict";



var express = require("express");
var app = express();
var routes = require("./routes")

var jsonParser = require("body-parser").json;
var logger = require("morgan");

app.use(logger("dev"));
app.use(jsonParser());

var mongoose = require("mongoose");

mongoose.connect("mongodb://heroku_5rr5plm7:qi2vu38qic2ttf9im2cv57g64b@ds143071.mlab.com:43071/heroku_5rr5plm7
");

var db = mongoose.connection;

db.on("error", function(err){
  console.error("connection error:", err);
});

db.once("open", function(){
  console.log("db connection successful.");
});

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use("/questions",routes);

// Catch 404 and forward to error handler
app.use(function(req, res, next){
  var err = new Error("Not Found");
  err.status = 400;
  next(err);
});

// Error handler
app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Express server is listening on port", port);
});
