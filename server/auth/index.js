const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

const db = require('../db/connection');
const users = db.get('users');
users.createIndex('username', {unique : true});

//This is just a mini express route it will look like /auth/
//something because we required it in the server/index.js
const router = express.Router();

const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_]+$)/).min(2).max(30).required(),
    password: Joi.string().min(2).required()
});

router.get('/', (req,res) => {
    res.json(
        {
            message: 'LOCKED'
        }
    );
});

router.post('/signup', (req,res,next)=> {
    const result = Joi.validate(req.body, schema);
    if (result.error === null) {
        users.findOne({username: req.body.username}).then(user => {
            // if the user is undefined, username is not in the db, otherwise it is a duplicate
            if(user){
                // there is already a user in the db with the username
                // respond with an error!
                const err = new Error('This username already exists');
                next(err);
            } else {
                bcrypt.hash(req.body.password,4).then(hashedPassword => {
                    // res.json({hashedPassword});
                    const newUser = {
                        username: req.body.username,
                        password: hashedPassword
                    };
                    users.insert(newUser).then(insertedUser => res.json(insertedUser));
                });
            }

        });
    } else {
        next(result.error);
    }
});

module.exports = router;