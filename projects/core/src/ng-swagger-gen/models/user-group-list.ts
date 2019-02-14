/* tslint:disable */
import { UserGroup } from './user-group';
export interface UserGroupList {
  currentPage?: number;
  numberOfPages?: number;
  pageSize?: number;
  totalNumber?: number;
  userGroups?: Array<UserGroup>;
}
