import { ICashOut } from "../../../@types/Transaction/ICashOut";
import { ITokenDecoded } from "../../../@types/Users/ITokenDecoded";

import Exception from "../../../shared/Exception";

import accountService from "../../Account/service/account.service";
import userService from "../../User/service/user.service";

class TransactionService {
  public async cashOut(
    tokenDecoded: ITokenDecoded,
    { value, username }: ICashOut
  ) {
    const balanceCashOut = await accountService.getBalanceByAccountId(
      tokenDecoded.accountId
    );

    if (!balanceCashOut || balanceCashOut < value) {
      throw new Exception(400, "Insufficient funds");
    }

    const userCashIn = await userService.findByUserByUsername(username);

    if (!userCashIn) throw new Exception(400, "User dosent exists");

    const updatedAccount = await accountService.depositByAccountId(
      userCashIn.accountId,
      value
    );

    return {
      username,
      ...updatedAccount,
    };
  }
}

export default new TransactionService();
