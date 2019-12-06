import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product, BaseOption, VariantType, VariantQualifier } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
import { tap, filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'cx-product-variant-selector',
  templateUrl: './product-variant-selector.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProductVariantSelectorComponent implements OnInit {
  constructor(private currentProductService: CurrentProductService) {}

  variants: BaseOption[] = [];
  variantType = VariantType;
  variantQualifier = VariantQualifier;
  product$: Observable<Product>;

  ngOnInit(): void {
    this.product$ = this.currentProductService.getProduct().pipe(
      filter(product => !!product),
      distinctUntilChanged(),
      tap(product => {
        product.baseOptions.forEach(option => {
          console.log('opt', option);
          if (option && option.variantType) {
            console.log('vt', option);
            this.variants[option.variantType] = option;
          }
        });
        console.log('var', this.variants);
      })
    );
  }
}
