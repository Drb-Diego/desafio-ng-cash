import accountModel from "../model/account.model";

class AccountService {
  public async create() {
    const accountCreated = await accountModel.create();

    return accountCreated;
  }
}

export default new AccountService();
