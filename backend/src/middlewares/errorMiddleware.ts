import { NextFunction, Request, Response } from "express";
import Exception from "../shared/Exception";

export default (
  error: Error | Exception,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  if (error instanceof Exception) {
    return response.status(error.statusCode).json({ error: error.message });
  }

  return response.status(500).json({ error: error.message });
};
