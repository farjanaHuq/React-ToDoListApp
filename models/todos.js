const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
    },
    completed: {
        type: Boolean
    }
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;