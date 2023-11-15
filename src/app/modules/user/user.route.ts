import express from 'express';
import {  UserController } from './user.controller';

const router = express.Router();

router.post('/register', UserController.userRegister);

router.post('/login', UserController.userLogin);

router.get('/:email', UserController.getUserByEmail);

export const UserRoutes = router;
