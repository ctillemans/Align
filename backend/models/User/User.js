const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const userSchema = new Schema({
    unsername:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true
    }
});

User = module.exports = mongoose.model("User", userSchema);

// section for user functionality
//  TODO create user (for registration)
//  TODO login User 
//  TODO Update User (not for MVP )
//  TODO delete User 

