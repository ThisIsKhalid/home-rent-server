import express from 'express';
import { ReservationController } from './reservation.controller';

const router = express.Router();

router.post('/add-reservation', ReservationController.addReservation);

export const ReservationRoute = router;
