import { House } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IListingsParams } from './house.interface';

const addHouse = async (house: House) => {
  const result = await prisma.house.create({
    data: house,
  });

  return result;
};

const getHouses = async (params: IListingsParams) => {
  const {
    userId,
    roomCount,
    guestCount,
    bathroomCount,
    locationValue,
    startDate,
    endDate,
    category,
  } = params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: any = {};

  if (userId) {
    query.userId = userId;
  }

  if (category) {
    query.category = category;
  }

  if (roomCount) {
    query.roomCount = {
      gte: +roomCount,
    };
  }

  if (guestCount) {
    query.guestCount = {
      gte: +guestCount,
    };
  }

  if (bathroomCount) {
    query.bathroomCount = {
      gte: +bathroomCount,
    };
  }

  if (locationValue) {
    query.locationValue = locationValue;
  }

  if (startDate && endDate) {
    query.NOT = {
      reservations: {
        some: {
          OR: [
            {
              endDate: { gte: startDate },
              startDate: { lte: startDate },
            },
            {
              startDate: { lte: endDate },
              endDate: { gte: endDate },
            },
          ],
        },
      },
    };
  }

  const houses = await prisma.house.findMany({
    where: query,
    orderBy: {
      createdAt: 'desc',
    },
  });
  // console.log(houses);

  return houses;
};

export const HouseService = {
  addHouse,
  getHouses,
};
