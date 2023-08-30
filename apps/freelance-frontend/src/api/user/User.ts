import { Bid } from "../bid/Bid";
import { Job } from "../job/Job";
import { Message } from "../message/Message";
import { Review } from "../review/Review";
import { Transaction } from "../transaction/Transaction";

export type User = {
  bids?: Array<Bid>;
  bio: string | null;
  createdAt: Date;
  email: string;
  id: string;
  jobs?: Array<Job>;
  location: string | null;
  name: string | null;
  receivedMessages?: Array<Message>;
  reviewsAsClient?: Array<Review>;
  reviewsAsFreelancer?: Array<Review>;
  role?: "CLIENT" | "FREELANCER";
  sentMessages?: Array<Message>;
  transactionsAsClient?: Array<Transaction>;
  transactionsAsFreelancer?: Array<Transaction>;
};
