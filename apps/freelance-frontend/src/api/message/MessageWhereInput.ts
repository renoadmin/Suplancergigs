import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type MessageWhereInput = {
  content?: StringFilter;
  id?: StringFilter;
  receiver?: UserWhereUniqueInput;
  sender?: UserWhereUniqueInput;
  sentAt?: DateTimeFilter;
};
