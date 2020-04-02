import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

import {
  RoutingService,
  CxDatePipe,
  EntitiesModel,
  OrgUnitUserGroupService,
  OrgUnitUserGroup,
} from '@spartacus/core';

import {
  AbstractListingComponent,
  ListingModel,
} from '../../abstract-component/abstract-listing.component';

@Component({
  selector: 'cx-user-group-list',
  templateUrl: './user-group-list.component.html',
})
export class UserGroupListComponent extends AbstractListingComponent
  implements OnInit {
  cxRoute = 'userGroups';

  constructor(
    protected routingService: RoutingService,
    protected userGroupsService: OrgUnitUserGroupService,
    protected cxDate: CxDatePipe
  ) {
    super(routingService);
  }

  ngOnInit(): void {
    this.data$ = <Observable<ListingModel>>this.queryParams$.pipe(
      tap(queryParams =>
        this.userGroupsService.loadOrgUnitUserGroups(queryParams)
      ),
      switchMap(queryParams =>
        this.userGroupsService.getList(queryParams).pipe(
          filter(Boolean),
          map((userGroupsList: EntitiesModel<OrgUnitUserGroup>) => ({
            sorts: userGroupsList.sorts,
            pagination: userGroupsList.pagination,
            values: userGroupsList.values.map(userGroup => ({
              code: userGroup.uid,
              name: userGroup.name,
              parentUnit: userGroup.orgUnit && userGroup.orgUnit.name,
              uid: userGroup.orgUnit && userGroup.orgUnit.uid,
            })),
          }))
        )
      )
    );
  }
}