import { NextFunction, Request, Response } from "express";
import userService from "../service/users.service";
import accountService from "../../Account/service/account.service";

class usersController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { username, password } = request.body;

      await userService.create({ username, password });

      return response.status(201).json({ message: "user created" });
    } catch (error) {
      next(error);
    }
  }

  public async login(request: Request, response: Response, next: NextFunction) {
    try {
      const { username, password } = request.body;

      const tokenCreated = await userService.login({ username, password });

      return response.status(200).json({ token: tokenCreated });
    } catch (error) {
      next(error);
    }
  }

  public async getBalance(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { authorization: token } = request.headers;

      const tokenJson = JSON.parse(token as string);

      const balance = await accountService.getBalanceByAccountId(tokenJson);
      return response.status(200).json(balance);
    } catch (error) {
      next(error);
    }
  }
}

export default new usersController();
