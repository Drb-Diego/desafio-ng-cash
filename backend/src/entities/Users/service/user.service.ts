import { ICreateUserServiceDTO } from "../../../@types/Users/ICreateUserDTO";
import bcrypt from "bcrypt";

import accountService from "../../Account/service/account.service";

import usersModel from "../model/users.model";

import Exception from "../../../shared/Exception";

class UserService {
  public async create({ username, password }: ICreateUserServiceDTO) {
    const userExists = await usersModel.findByUsername(username);

    if (userExists) throw new Exception(400, "user already exists");

    const accountCreated = await accountService.create();

    const passwordHashed = await bcrypt.hash(password, 3);

    const userCreated = await usersModel.create({
      username,
      password: passwordHashed,
      accountId: accountCreated.id,
    });

    return userCreated;
  }
}

export default new UserService();
