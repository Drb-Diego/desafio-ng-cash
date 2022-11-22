import { NextFunction, Request, Response } from "express";
import { ITokenDecoded } from "../@types/Users/ITokenDecoded";
import { validateToken } from "../shared/token";

export default (request: Request, response: Response, next: NextFunction) => {
  const { authorization: token } = request.headers;

  const tokenDecoded = validateToken(token as string);

  if (tokenDecoded instanceof Error) {
    return response.status(400).json({ message: tokenDecoded.message });
  }

  request.headers.authorization = JSON.stringify(tokenDecoded as ITokenDecoded);
  next();
};
