import { ICreateUserModelDTO } from "../../../@types/Users/ICreateUserDTO";
import prisma from "../../../shared/database";

class UsersModel {
  public async findByUsername(username: string) {
    const userFinded = await prisma.users.findFirst({ where: { username } });

    return userFinded;
  }

  public async create({ username, password, accountId }: ICreateUserModelDTO) {
    const userCreated = await prisma.users.create({
      data: { username, password, accountId },
    });

    return userCreated;
  }
}

export default new UsersModel();
