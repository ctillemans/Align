const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
});

User = module.exports = mongoose.model("users", userSchema);

// section for user functionality
//  TODO create user (for registration)
//  TODO login User 
//  TODO Update User (not for MVP )
//  TODO delete User 

