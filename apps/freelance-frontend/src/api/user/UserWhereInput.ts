import { BidListRelationFilter } from "../bid/BidListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  bids?: BidListRelationFilter;
  bio?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  id?: StringFilter;
  jobs?: JobListRelationFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  receivedMessages?: MessageListRelationFilter;
  reviewsAsClient?: ReviewListRelationFilter;
  reviewsAsFreelancer?: ReviewListRelationFilter;
  role?: "CLIENT" | "FREELANCER";
  sentMessages?: MessageListRelationFilter;
  transactionsAsClient?: TransactionListRelationFilter;
  transactionsAsFreelancer?: TransactionListRelationFilter;
};
