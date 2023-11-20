import express from 'express';
import { HouseController } from './house.controller';

const router = express.Router();

router.post('/add-house', HouseController.addHouse);

export const HouseRoutes = router;
