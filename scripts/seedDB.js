const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Todos collection and inserts the Todos below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ToDos");

const toDoSeed = [
  
   
] 

db.Todo
  .remove({})
  .then(() => db.Todo.collection.insert(toDoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
