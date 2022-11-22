import prisma from "../../../shared/database";

class AccountModel {
  public async create() {
    const accountCreated = await prisma.accounts.create({
      data: { balance: 10000 },
    });

    return accountCreated;
  }

  public async getBalanceByAccountId(id: number) {
    const balance = await prisma.accounts.findFirst({ where: { id } });

    return balance?.balance;
  }

  public async depositBalance(accountId: number, value: number) {
    const updatedAccount = await prisma.accounts.update({
      where: { id: accountId },
      data: { balance: value },
    });

    return updatedAccount;
  }
}

export default new AccountModel();
