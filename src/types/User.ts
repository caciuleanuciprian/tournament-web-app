import { Tournament } from "./Tournament";

export type User = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  tournaments: Tournament[];
};
