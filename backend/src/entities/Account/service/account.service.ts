import accountModel from "../model/account.model";
import { ITokenDecoded } from "../../../@types/Users/ITokenDecoded";

class AccountService {
  public async create() {
    const accountCreated = await accountModel.create();

    return accountCreated;
  }

  public async getBalanceByAccountId(tokenDecoded: ITokenDecoded) {
    const balance = await accountModel.getBalanceByAccountId(
      tokenDecoded.accountId
    );

    return {
      username: tokenDecoded.username,
      accountId: tokenDecoded.accountId,
      balance,
    };
  }
}

export default new AccountService();
