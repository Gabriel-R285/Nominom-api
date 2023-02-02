const UserAttributes= require('./database/Models/users');
const User = require('./database/Models/users');
const jwt = require('jwt');
const TOKEN_SECRET = process
import {Request, Response, NextFunction} from 'express';

function VerifyToken(res:Response, req:Request){
let token = User.token;
return jwt.verify({token:req.body.token}, TOKEN_SECRET).then(tokenExist => {
    if(tokenExist!) {
        res.status(401).send('Token not found')
    }
})
}

export {VerifyToken};
