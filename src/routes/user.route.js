import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';

const router = express.Router();

//route to register a new user
router.post('/Register', newUserValidator, userController.registerNewUser);

export default router;
