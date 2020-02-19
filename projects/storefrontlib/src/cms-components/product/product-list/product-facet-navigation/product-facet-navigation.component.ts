import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { Breadcrumb, Facet } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
import { FacetService } from './facet.service';

@Component({
  selector: 'cx-product-facet-navigation',
  templateUrl: './product-facet-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFacetNavigationComponent {
  iconTypes = ICON_TYPE;

  /**
   * indicates that the navigation is opened,
   * typically used in mobile
   */
  showNav = false;

  facets$: Observable<Facet[]> = this.facetService.facets$;
  activeFacets$: Observable<Breadcrumb[]> = this.facetService.breadcrumbs$;

  @HostBinding('class.container') container = true;

  constructor(private facetService: FacetService) {}

  getLinkParams(facet: Breadcrumb) {
    return this.facetService.getLinkParams(facet.removeQuery.query.value);
  }

  toggleBreadcrumb(breadcrumb: Breadcrumb): void {
    this.facetService.toggleValue(breadcrumb.removeQuery);
  }

  toggleNavigation() {
    this.showNav = !this.showNav;
  }
}
