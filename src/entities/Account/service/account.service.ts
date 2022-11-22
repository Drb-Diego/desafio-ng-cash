import { Accounts } from "@prisma/client";
import accountModel from "../model/account.model";

class AccountService {
  public async create(): Promise<Accounts> {
    const accountCreated = await accountModel.create();

    return accountCreated;
  }

  public async getBalanceByAccountId(accontId: number) {
    const balance = await accountModel.getBalanceByAccountId(accontId);

    return balance as number;
  }

  public async depositByAccountId(accountId: number, value: number) {
    const currentBalance = await this.getBalanceByAccountId(accountId);

    const updatedAccount = await accountModel.depositBalance(
      accountId,
      value + currentBalance
    );

    return updatedAccount;
  }
}

export default new AccountService();
