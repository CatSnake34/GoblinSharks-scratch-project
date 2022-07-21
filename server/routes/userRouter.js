const express = require('express');
const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/cookieController.js');
const userRouter = express.Router();

const path = require ('path');


userRouter.post('/signup', 
    userController.createUser, 
    cookieController.setUserSSIDCookie, (req, res) => {
    return res.status(200).send(); // return ssid instead
});

userRouter.post('/login', 
    userController.verifyUser, 
    cookieController.setUserSSIDCookie, (req, res) => {
        return res.status(200).send(); // return ssid instead
});

// userRouter.get('/*', (req, res) => {
//         return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
//       });    

module.exports = userRouter;


