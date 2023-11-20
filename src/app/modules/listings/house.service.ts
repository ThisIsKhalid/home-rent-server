import { House } from '@prisma/client';
import prisma from '../../../shared/prisma';

const addHouse = async (house: House) => {
  console.log('listing', house);
  const result = await prisma.house.create({
    data: house,
  });

  return result;
};

export const HouseService = {
  addHouse,
};
