import { BidUpdateManyWithoutUsersInput } from "./BidUpdateManyWithoutUsersInput";
import { JobUpdateManyWithoutUsersInput } from "./JobUpdateManyWithoutUsersInput";
import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bids?: BidUpdateManyWithoutUsersInput;
  bio?: string | null;
  email?: string;
  jobs?: JobUpdateManyWithoutUsersInput;
  location?: string | null;
  name?: string | null;
  receivedMessages?: MessageUpdateManyWithoutUsersInput;
  reviewsAsClient?: ReviewUpdateManyWithoutUsersInput;
  reviewsAsFreelancer?: ReviewUpdateManyWithoutUsersInput;
  role?: "CLIENT" | "FREELANCER";
  sentMessages?: MessageUpdateManyWithoutUsersInput;
  transactionsAsClient?: TransactionUpdateManyWithoutUsersInput;
  transactionsAsFreelancer?: TransactionUpdateManyWithoutUsersInput;
};
