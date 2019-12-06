import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OccConfig, Product, BaseOption, VariantQualifier, VariantOptionQualifier } from '@spartacus/core';

@Component({
  selector: 'cx-style-selector',
  templateUrl: './style-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantStyleSelectorComponent {
  constructor(
    private config: OccConfig,
    ) {}

  @Input()
  product: Product;

  @Input()
  variants: BaseOption;

  @Input()
  qualifier: VariantQualifier;

  baseUrl = this.config.backend.occ.baseUrl;

  getVariantOptionValue(qualifiers: VariantOptionQualifier[], qualifier: VariantQualifier) {
    const obj = qualifiers.find(q => q.name === qualifier);
    return obj ? obj.value : ''; 
  }

  getVariantThumbnailUrl(
    variantOptionQualifiers: VariantOptionQualifier[]
  ): string {
    const thumbnail = variantOptionQualifiers.find(
      item => item.qualifier === VariantQualifier.THUMBNAIL
    );
    return thumbnail
      ? `${this.config.backend.occ.baseUrl}${thumbnail.image.url}`
      : '';
  }
}
