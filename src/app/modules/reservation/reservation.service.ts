import { Reservation } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { IGetReservation } from './reservation.interface';

const addReservation = async (reservation: Reservation) => {
  if (
    !reservation.startDate ||
    !reservation.endDate ||
    !reservation.userId ||
    !reservation.houseId
  ) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Missing required fields: startDate, endDate, userId, houseId'
    );
  }
  // console.log(reservation);
  const result = await prisma.reservation.create({
    data: reservation,
  });

  return result;
};

const getReservations = async (params: IGetReservation) => {
  const { houseId, userId, authorId } = params;
//   console.log(params);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query : any = {};

  if (houseId) {
    query.houseId = houseId;
  }

  if (userId) {
    query.userId = userId;
  }

  if (authorId) {
    query.house = { userId: authorId };
  }

  const reservations = await prisma.reservation.findMany({
    where: query,
    include: {
      house: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
//   console.log(reservations, 'reservations');

  return reservations;
};

export const ReservationService = {
  addReservation,
  getReservations,
};
