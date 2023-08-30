import { User } from "../user/User";

export type Message = {
  content: string;
  id: string;
  receiver?: User;
  sender?: User;
  sentAt: Date;
};
