import { FloatFilter } from "../../util/FloatFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type TransactionWhereInput = {
  amount?: FloatFilter;
  client?: UserWhereUniqueInput;
  freelancer?: UserWhereUniqueInput;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  transactionDate?: DateTimeFilter;
};
