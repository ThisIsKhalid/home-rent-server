import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { HouseService } from './house.service';

const addHouse = catchAsync(async (req: Request, res: Response) => {
  const result = await HouseService.addHouse(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'House added successfully',
    data: result,
  });
});

const getHouses = catchAsync(async (req: Request, res: Response) => {
  const params = req.query;
  const result = await HouseService.getHouses(params);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'House fetched successfully',
    data: result,
  });
});

export const HouseController = {
  addHouse,
  getHouses,
};
