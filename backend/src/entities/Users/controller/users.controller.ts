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

      if (username.length > 3) {
        return response
          .status(400)
          .json({ message: "username must be almost 3 characters" });
      }

      await userService.create({ username, password });

      return response.status(201).json({ message: "user created" });
    } catch (error) {
      next(error);
    }
  }
}

export default new usersController();
