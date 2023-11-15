import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const userRegister = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.userRegister(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contact added successfully',
    data: result,
  });
});

export const UserController = {
  userRegister,
};
