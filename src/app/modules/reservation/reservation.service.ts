import { Reservation } from '@prisma/client';
import prisma from '../../../shared/prisma';

const addReservation = async (reservation: Reservation) => {
    // console.log(reservation);
  const result = await prisma.reservation.create({
    data: reservation,
  });

  return result;
};

export const ReservationService = {
  addReservation,
};
