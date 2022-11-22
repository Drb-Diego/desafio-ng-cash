export interface ICreateUserServiceDTO {
  username: string;
  password: string;
}

export interface ICreateUserModelDTO extends ICreateUserServiceDTO {
  accountId: number;
}
