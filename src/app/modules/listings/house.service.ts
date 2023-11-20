import { House } from '@prisma/client';
import prisma from '../../../shared/prisma';

const addHouse = async (house: House) => {
  const result = await prisma.house.create({
    data: house,
  });

  return result;
};

export const HouseService = {
  addHouse,
};
