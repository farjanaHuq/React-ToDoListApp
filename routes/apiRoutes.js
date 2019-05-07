const router = require('express').Router();
const db = require('../models');


//displays all books
router.get("/todos", (req, res) => {
  db.Todo.find({})
    .then(resp => { 
        console.log(resp);
        res.json(resp);
      })
    .catch(function (err) {
        res.json(err);
    });
  
  });

  // create new book
router.post("/todos", (req, res) => {
  
    db.Todo.create({
      title: req.body.title,
      completed: req.body.completed
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

    db.Todo.remove( { _id : req.params.id})
         .then(function (data) {
            res.json(data);
         })
         .catch(function (err) {
            console.log(err);
            throw err;
         });
    ;
4
});

  module.exports = router;