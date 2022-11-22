import { NextFunction, Request, Response } from "express";
import { ITokenDecoded } from "../../../@types/ITokenDecoded";
import transactionService from "../service/transaction.service";

class TransactionController {
  public async cashOut(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { authorization: token } = request.headers;
      const { value, username } = request.body;

      const tokenJson: ITokenDecoded = JSON.parse(token as string);

      const updatedAccount = await transactionService.cashOut(tokenJson, {
        value,
        username,
      });

      return response.status(200).json(updatedAccount);
    } catch (error) {
      next(error);
    }
  }
}

export default new TransactionController();
