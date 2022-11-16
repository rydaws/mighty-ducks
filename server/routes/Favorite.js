const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /favorite.
const favoriteRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the favorites of the user thats logged in
favoriteRoutes.route("/Favorite/").get(function (req, res) {
 let db_connect = dbo.getDb("LoginInfo");
 db_connect
   .collection("favorites")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
//searches favoritedBy for the current user logged in
favoriteRoutes.route("/Favorite/:user").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("favorites").find({favoritedBy:String(req.params.user)}).toArray(function (err, result) {
       if (err) throw err;
       res.json(result);
});
 });


// // This section will help you get a single record by id
// favoriteRoutes.route("/Favorite/:id").get(function (req, res) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect
//    .collection("favorites")
//    .findOne(myquery, function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });
 
favoriteRoutes.route("/Favorite/:Find").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myobj = {
    favoritedBy:String(req.body.favoritedBy),
    Arrival: String(req.body.arrivingAt),
    Departure: String(req.body.departingFrom),
    Airline: String(req.body.airline),
    Price: String(req.body.price),
    departureDate: String(req.body.departure)
  };
  db_connect
    .collection("favorites")
    .deleteOne(myobj, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });

// This section will help you create a new record or delete a record if it is already in the table.
favoriteRoutes.route("/Favorite/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   favoritedBy:req.body.favoritedBy,
   Arrival: req.body.arrivingAt,
   Departure: req.body.departingFrom,
   Airline: req.body.airline,
   Price: req.body.price,
   departureDate: req.body.departure
 };
 db_connect.collection("favorites").find
  
  db_connect.collection("favorites").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});


// This section will help you delete a record
favoriteRoutes.route("/Favorite/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("favorites").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports=favoriteRoutes;