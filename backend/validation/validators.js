const isEmpty = require('is-empty');
const validator = require('validator');


const validateLogin = (user) =>{
    let errors = {};

    // convert empty inputs to empty strings for validator functions to work
    // name
    //email
    //password
    user.email = isEmpty(user.email) ? '' : user.email;
    user.password = isEmpty(user.password) ? '' : user.password;

    if(validator.isEmpty(user.email)){
        errors.email = "Email field must contain a value"
    }
    if(!validator.isEmail(user.email)){
        errors.emailInvalid = "Must be a valid email address in the form 1234@host.com"
    }
    if(validator.isEmpty(user.password)){
        errors.password = "Password field must contain a value";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }
};

const validateRegister = (user) =>{
    let errors = {};

    user.name = isEmpty(user.name) ? '' : user.name;
    user.email = isEmpty(user.email) ? '' : user.email;
    user.password = isEmpty(user.password) ? '' : user.password;


    // validate functions 
    if(validator.isEmpty(user.name)){
        errors.name ="Name field must contain a value";
    }

    if(validator.isEmpty(user.email)){
        errors.email = "Email field must contain a value"
    }
    if(!validator.isEmail(user.email)){
        errors.emailInvalid = "Must be a valid email address in the form 1234@host.com"
    }
    if(validator.isEmpty(user.password)){
        errors.password = "Password field must contain a value";
    }
    // if(!validator.isLength(user.password, {min: 6, max: 10})){
    //     errors.passwordLength = "Password must be between 6 and 10 characters long";
    // }

    return{
        errors,
        isValid: isEmpty(errors)
    }
};



module.exports ={validateLogin, validateRegister};
