import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ReviewWhereInput = {
  client?: UserWhereUniqueInput;
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  freelancer?: UserWhereUniqueInput;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  rating?: StringFilter;
};
