import express from 'express';
import { HouseController } from './house.controller';

const router = express.Router();

router.post('/add-house', HouseController.addHouse);

router.post('/favorites/:userId/:houseId', HouseController.addFavorite);

router.delete('/favorites/:userId/:houseId', HouseController.deleteFavorite);

router.get('/', HouseController.getHouses);

export const HouseRoutes = router;
