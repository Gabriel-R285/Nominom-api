import User, {UserAttribute} from '../Models/User';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function UserExist(user:<UserAttribute>, callback: Function): Promise<void> {
    return User.find({email:user.email}).then((Ingredient) => {
        if(!Ingredient) {
            throw new Error('User dont exist').then(callback())
        }
    })
}

function Encrypt(user:<UserAttribute>, callback: Function): Promise<void> {
    let salt = 8;
    return bycript.generateSalt({password:user.password}).then((salt) => byscript.hash(password, salt)).then(callback())
}

function GenerateUser(user: <UserAttribute> callback: Function): Promise<void> {
    return User.create({
        first_name,
        last_name,
        email: email.toLowerCase(),
        password: password,
    }).then(callback())
}

function GenerateToken(user:<UserAttribute>):Promise <UserAttribute> {
    return jwt.sign({user:id.toString()}, TOKEN_SECRET)
}

export {UserExist, Encrypt, GenerateUser, GenerateToken }
