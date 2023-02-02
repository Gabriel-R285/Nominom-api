import {Request, Response} from 'express';
const {UserAttributes} = require('../database/Models/users');
const User = require('../database/Models/users');
const bcrypt = require('bcrypt');
import jwt from 'jsonwebtoken';

require('dotenv').config()

const register: typeof UserAttributes = async(first_name, last_name, email, password) => {
   try {
     const hash = await bcrypt.hash(password, () => {
       bcrypt.genSalt(10);
    });
     const userGenerate = await new User({first_name, last_name, email, password:hash});
     console.log(userGenerate)
  } catch (error) {
    console.log(error);
  }
}

const login: typeof UserAttributes = async(id, email, password) => {
   return User.findOne({where: {email} }).then(async user => {
     await bcrypt.compare(password);
  }).then(u => {
    const {id, email} = u!;
    return {token: jwt.sign({id, email}, process.env.TOKEN_SECRET)};
  });
 }

module.exports = {login, register};

