import {Request, Response} from 'express';
const {UserAttributes} = require('../database/Models/users');
const {Users} = require('../database/Models/users');
const userServices = require('./Services');

async function registerController (req:Request, res:Response): Promise<Response>{

    await userServices.register(req.body).then(user => {
      res.status(200).send(user);
    }).catch((error) => {
      return res.status(500).send(error);
    });

}


async function loginController(req: Request, res:Response) {
   await userServices.login(req.body).then(() => {
     res.status('User succesfully login!')
  }).catch((error) => {
    console.error('User couldnt login:', error)
  });
};


module.exports = {registerController, loginController};
