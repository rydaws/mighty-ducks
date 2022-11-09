const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/Favorite").get(function (req, res) {
 let db_connect = dbo.getDb("LoginInfo");
 db_connect
   .collection("favorites")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordRoutes.route("/Favorite/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("favorites")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new record.
recordRoutes.route("/Favorite/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   Arrival: req.body.Arrival,
   Departure: req.body.Departure,
   Price: req.body.Price
 };
 db_connect.collection("favorites").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});