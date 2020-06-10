const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    title:{
        type: String,
        required: true,
    }, 
    description:{
        type: String,
    },
    dueDate:{
        type: Date,
        default: 0
    },
    dateCreated:{
        type: Date,
        default: Date.now()
    },
    priority:{
        type: String,
        default: 'Normal'
    },
    Aligns:{
        type: Array,
    },
    tags:{
        type: Array,
        default: ['Task', 'Align', 'Productivity'],
    },
});

const toDo = module.exports = mongoose.model('toDos', toDoSchema)