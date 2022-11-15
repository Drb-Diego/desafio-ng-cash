import { NextFunction, Request, Response } from "express";
import userService from "../service/user.service";

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
}

export default new usersController();
