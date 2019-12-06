import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  Product,
  RoutingService,
  BaseOption,
  VariantQualifier,
} from '@spartacus/core';
import { VariantOptionQualifier } from 'projects/backend/occ-client/lib/models';

@Component({
  selector: 'cx-size-selector',
  templateUrl: './size-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantSizeSelectorComponent {
  constructor(
    private routingService: RoutingService
  ) {}

  @Input()
  product: Product;

  @Input()
  variants: BaseOption;

  @Input()
  qualifier: VariantQualifier;

  changeSize(code: string): void {
    if (code) {
      this.routingService.go({
        cxRoute: 'product',
        params: { code },
      });
    }
    return null;
  }
  getVariantOptionValue(qualifiers: VariantOptionQualifier[], qualifier: VariantQualifier) {
    const obj = qualifiers.find(q => q.name === qualifier);
    return obj ? obj.value : ''; 
  }

}
