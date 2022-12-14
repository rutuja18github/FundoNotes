import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import  {resetAuth}  from '../middlewares/auth.middleware';
const router = express.Router();

//route to register a new user
router.post('/Register', newUserValidator, userController.registerNewUser);

//route to login user
router.post('/login',userController.login);

//route for reset password
router.put('/ResetPassword', resetAuth, userController.ResetPassword);

//route to forgot password
router.post('/forgotpassword', userController.forgotPassword);

export default router;
