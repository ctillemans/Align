const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const validators = require('../../validation/validators');
const keys = require('../../config/keys')
const jwt = require('jsonwebtoken');

const User = require('./User');


const register = (req, res) => {
    const {errors, isValid} = validators.validateRegister(req.body);
    if(!isValid){
        res.json(errors);
    }

    User.findOne({email: req.body.email})
    .then(user =>{
        if(user){
            return res.status(400).json({email: 'email already exists'})
        }
        else{
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            
            bcrypt.genSalt(10, (err, salt)=>{
                bcrypt.hash(newUser.password, salt, (err,hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                })
            })
        }
    }).catch(err => {
        res.status(400).json(err);
    });
}

const login = (req,res) =>{

    const {errors, isValid} = validators.validateLogin(req.body);

    if(!isValid){
        res.json(errors);
    }

    User.findOne({email: req.body.email})
    .then(user => {
        if(!user){
            return res.status(400).json({email: `no user found with the email address ${req.body.email}`});
        }else{
            bcrypt.compare(req.body.password, user.password)
            .then(match => {
                if(match){
                    const payload = {
                        id: user.id,
                        name: user.name
                    };
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn: 2592000
                        },
                        (err, token) => {
                            res.json({
                                sucess: true,
                                token: 'Bearer' + token
                            });
                        }
                    )
                }else{
                    return res.status(400)
                    .json({passoword:'Password does not match our records. Please try again'});
                }
            })
        }
    }).catch(err => console.error(err));
}

router.post('/register', register);
router.post('/login', login)

module.exports = router;

