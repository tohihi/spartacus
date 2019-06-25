import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Country, UserAddressService } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'cx-billing-address-form',
  templateUrl: './billing-address-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillingAddressFormComponent {
  @Input()
  billingAddress: FormGroup;

  @Input()
  countries$: Observable<Country[]>;
  selectedCountry$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(protected userAddressService: UserAddressService) {}

  countrySelected(country: Country): void {
    this.billingAddress['controls'].country['controls'].isocode.setValue(
      country.isocode
    );
    this.selectedCountry$.next(country.isocode);
  }
}
