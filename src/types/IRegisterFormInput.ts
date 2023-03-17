import { IFormInput } from "./IFormInput";

export interface IRegisterFormInput extends IFormInput {
  username: String;
  password: String;
  firstName?: String;
  lastName?: String;
  email?: String;
}
