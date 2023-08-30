import { User } from "../user/User";
import { Job } from "../job/Job";

export type Bid = {
  amount: number;
  createdAt: Date;
  freelancer?: User;
  id: string;
  job?: Job;
  proposal: string;
};
