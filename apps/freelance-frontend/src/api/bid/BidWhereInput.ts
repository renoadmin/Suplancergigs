import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type BidWhereInput = {
  amount?: FloatFilter;
  createdAt?: DateTimeFilter;
  freelancer?: UserWhereUniqueInput;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  proposal?: StringFilter;
};
