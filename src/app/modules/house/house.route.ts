import express from 'express';
import { HouseController } from './house.controller';

const router = express.Router();

router.post('/add-house', HouseController.addHouse);

router.get('/', HouseController.getHouses);

export const HouseRoutes = router;
