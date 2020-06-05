mongoose = require('../db.connection');
const Schema = mongoose.Schema


const todoShcema = new Schema({
    todo: {type:String, required: true},
    description: {type:String, required: true},
})

const toDo = mongoose.model(todoSchema, 'toDo');