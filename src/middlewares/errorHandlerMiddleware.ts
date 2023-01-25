import httpStatus from "http-status";
import { Request, Response, NextFunction } from "express";

export default function handleErrorsMiddleware(
  err,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}
