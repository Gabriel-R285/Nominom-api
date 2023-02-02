"use strict";
exports.__esModule = true;
exports.VerifyToken = void 0;
var UserAttributes = require('./database/Models/users');
var User = require('./database/Models/users');
var jwt = require('jwt');
var TOKEN_SECRET = process;
function VerifyToken(res, req) {
    var token = User.token;
    return jwt.verify({ token: req.body.token }, TOKEN_SECRET).then(function (tokenExist) {
        if (tokenExist) {
            res.status(401).send('Token not found');
        }
    });
}
exports.VerifyToken = VerifyToken;
