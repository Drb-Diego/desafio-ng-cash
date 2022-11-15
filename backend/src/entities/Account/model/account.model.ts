import prisma from "../../../shared/database";

class AccountModel {
  public async create() {
    const accountCreated = await prisma.accounts.create({
      data: { balance: 10000 },
    });

    return accountCreated;
  }
}

export default new AccountModel();
