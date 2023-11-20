import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { HouseRoutes } from '../modules/listings/house.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/houses',
    route: HouseRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
