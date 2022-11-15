import { ICreateUserServiceDTO } from "../../../@types/Users/ICreateUserDTO";
import { ILoginUserDTO } from "../../../@types/Users/ILoginUserDTO";
import { createToken } from "../../../shared/token";

import bcrypt from "bcrypt";

import accountService from "../../Account/service/account.service";
import usersModel from "../model/users.model";
import Exception from "../../../shared/Exception";

class UserService {
  public async create({ username, password }: ICreateUserServiceDTO) {
    const userExists = await usersModel.findByUsername(username);

    if (userExists) throw new Exception(400, "User already exists");

    const accountCreated = await accountService.create();

    const passwordHashed = await bcrypt.hash(password, 3);

    const userCreated = await usersModel.create({
      username,
      password: passwordHashed,
      accountId: accountCreated.id,
    });

    return userCreated;
  }

  public async login({ username, password }: ILoginUserDTO) {
    const userFinded = await usersModel.findByUsername(username);

    if (!userFinded) {
      throw new Exception(400, "Invalid username or user dosent exists");
    }

    const passwordIsValid = await bcrypt.compare(password, userFinded.password);

    if (!passwordIsValid) throw new Exception(400, "Invalid password");

    const tokenCreated = createToken(userFinded);

    return tokenCreated;
  }
}

export default new UserService();
