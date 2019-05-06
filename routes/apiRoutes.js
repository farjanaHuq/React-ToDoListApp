const router = require('express').Router();
const axios = require('axios');
const db = require('../models');
const JSON = require('circular-json');



//displays all books
router.get("/todos", (req, res) => {
  db.Book.findAll({})
    .then(resp => { 
        console.log(resp);
        res.json(resp);})
    .catch(function (err) {
        res.json(err);
    });
  
  });

  // create new book
router.post("/todos", (req, res) => {
  
    db.Book.create({
      title: req.body.title,
      confirmed: req.body.confirmed
    })
    .then(data => {
        res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  
  });

// deletes a book
router.delete('/todos/:id', function (req, res) {

    db.Book.remove( { _id : req.params.id})
         .then(function (data) {
            res.json(data);
         })
         .catch(function (err) {
            console.log(err);
            throw err;
         });
    ;

});

  module.exports = router;