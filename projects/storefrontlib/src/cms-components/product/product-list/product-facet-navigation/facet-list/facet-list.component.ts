import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Facet } from '@spartacus/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FocusConfig } from '../../../../../layout/a11y/keyboard-focus/index';
import { ICON_TYPE } from '../../../../misc/icon/icon.model';
import { FacetGroupCollapsedState, FacetList } from '../facet.model';
import { FacetComponent } from '../facet/facet.component';
import { FacetService } from '../services/facet.service';

@Component({
  selector: 'cx-facet-list',
  templateUrl: './facet-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacetListComponent {
  /**
   * Indicates that the facet navigation is rendered in dialog.
   */
  @Input() isDialog: boolean;

  /** Emits when the list must close */
  @Output() closeList = new EventEmitter();

  /** The list of all facet and values related to the products in the list */
  facetList$: Observable<FacetList> = this.facetService.facetList$;

  iconTypes = ICON_TYPE;

  dialogFocusConfig: FocusConfig = {
    trap: true,
    block: true,
    focusOnEscape: true,
    autofocus: 'cx-facet',
  };

  constructor(
    protected facetService: FacetService,
    protected elementRef: ElementRef
  ) {}

  /**
   * Toggles the facet group in case it is not expanded.
   */
  expandFacetGroup(facet: Facet, ref: FacetComponent) {
    if (!ref.isExpanded) {
      this.facetService.toggle(facet, ref.isExpanded);
    }
  }

  /**
   * Indicates that the facet group has been expanded.
   */
  isExpanded(facet: Facet): Observable<boolean> {
    return this.facetService
      .getState(facet)
      .pipe(
        map((value) => value.toggled === FacetGroupCollapsedState.EXPANDED)
      );
  }

  /**
   * Indicates that the facet group has been collapsed.
   */
  isCollapsed(facet: Facet): Observable<boolean> {
    return this.facetService
      .getState(facet)
      .pipe(
        map((value) => value.toggled === FacetGroupCollapsedState.COLLAPSED)
      );
  }

  close(event?: boolean): void {
    this.closeList.emit(event);
  }
}