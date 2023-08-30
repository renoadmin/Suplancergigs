import { User } from "../user/User";
import { Job } from "../job/Job";

export type Transaction = {
  amount: number;
  client?: User;
  freelancer?: User;
  id: string;
  job?: Job;
  transactionDate: Date;
};
