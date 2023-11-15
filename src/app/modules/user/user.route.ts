import express from 'express';
import {  UserController } from './user.controller';

const router = express.Router();

router.post('/register', UserController.userRegister);

router.post('/login', UserController.userLogin);

export const UserRoutes = router;
