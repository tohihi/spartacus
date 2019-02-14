/* tslint:disable */
import { Principal } from './principal';
export interface UserGroup {
  members?: Array<Principal>;
  membersCount?: number;
  name?: string;
  subGroups?: Array<UserGroup>;
  uid?: string;
}
