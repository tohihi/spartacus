import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';

import {
  CheckoutService,
  RoutingService,
  GlobalMessageService,
  GlobalMessageType,
  CartService,
  CartDataService,
  PaymentDetails,
  Address,
  Cart,
  UserService
} from '@spartacus/core';

import { Subscription, Observable, from } from 'rxjs';
import { filter, mergeMap, first } from 'rxjs/operators';

import { CheckoutNavBarItem } from './checkout-navigation-bar';

@Component({
  selector: 'cx-multi-step-checkout',
  templateUrl: './multi-step-checkout.component.html',
  styleUrls: ['./multi-step-checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiStepCheckoutComponent implements OnInit, OnDestroy {
  step = 1;
  done = false;

  deliveryAddress: Address;
  paymentDetails: PaymentDetails;
  shippingMethod: string;
  subscriptions: Subscription[] = [];

  cart$: Observable<Cart>;
  tAndCToggler = false;

  navs: CheckoutNavBarItem[] = this.initializeCheckoutNavBar();

  constructor(
    protected checkoutService: CheckoutService,
    protected cartService: CartService,
    protected cartDataService: CartDataService,
    protected routingService: RoutingService,
    protected userService: UserService,
    protected globalMessageService: GlobalMessageService,
    protected cd: ChangeDetectorRef
  ) { }

  // private refreshCart(): void {
  //   this.cartService.loadDetails();
  // }

  ngOnInit() {
    if (!this.cartDataService.getDetails) {
      this.cartService.loadDetails();
    }
    this.cart$ = this.cartService.getActive();
    this._processSteps();
    this.processSteps();
  }

  _processSteps(): void {
    // step1: set delivery address
    this.subscriptions.push(
      // Non-stream approach
      this.userService.getAddresses()
        .pipe(filter(_ => this.step === 1))
        .subscribe(deliveryAddresses => {
          console.log('delivery addresses');
          console.log(deliveryAddresses);
          if (deliveryAddresses) {
            deliveryAddresses.forEach(address => {
              if (address.defaultAddress) {
                console.log('default');
                this.addAddress({ address: address, newAddress: false });
                // this.step = 2;
                this.nextStep(2);
                this.cd.detectChanges();
                this.deliveryAddress = address;

                // TODO what is a cleaner way to do this?
                this.subscriptions[0].unsubscribe();
              }
            });
          }
        })
    );

    // step2: select delivery mode
    this.subscriptions.push(
      this.checkoutService
        .getSupportedDeliveryModes()
        .pipe(filter(_ => this.step === 2))
        .subscribe(supportedModes => {
          if (Object.keys(supportedModes).length === 0) {
            this.checkoutService.loadSupportedDeliveryModes();
          } else {
            this.setDeliveryMode({ 'deliveryModeId': supportedModes[supportedModes.length - 1].code });
            // this.step = 3;
            this.nextStep(3);
            this.cd.detectChanges();
            this.shippingMethod = supportedModes[supportedModes.length - 1].code;
            this.subscriptions[1].unsubscribe();
          }
        })
    );

    // step3: set payment information
    this.subscriptions.push(
      // Stream approach
      this.userService.getPaymentMethods().pipe(
        filter(_ => this.step === 3),
        mergeMap(payments => from(payments)),
        first(payment => payment.defaultPayment)
      ).subscribe(paymentInfo => {
        if (!paymentInfo['hasError']) {
          this.addPaymentInfo({
            newPayment: false,
            payment: paymentInfo,
            billingAddress: null
          });
          this.nextStep(4);
          this.paymentDetails = paymentInfo;
          this.cd.detectChanges();
          this.subscriptions[2].unsubscribe();
        } else {
          Object.keys(paymentInfo).forEach(key => {
            if (key.startsWith('InvalidField')) {
              this.globalMessageService.add({
                type: GlobalMessageType.MSG_TYPE_ERROR,
                text: 'InvalidField: ' + paymentInfo[key]
              });
            }
          });
          this.checkoutService.clearCheckoutStep(3);
        }
      })
    );

    // // step4: place order
    // this.subscriptions.push(
    //   this.checkoutService
    //     .getOrderDetails()
    //     .pipe(
    //       filter(order => Object.keys(order).length !== 0 && this.step === 4)
    //     )
    //     .subscribe(() => {
    //       // checkout steps are done
    //       this.done = true;
    //       this.routingService.go({ route: ['orderConfirmation'] });
    //     })
    // );
  }

  processSteps(): void {
    // // step1: set delivery address
    // this.subscriptions.push(
    //   this.checkoutService
    //     .getDeliveryAddress()
    //     .pipe(
    //       filter(
    //         deliveryAddress =>
    //           Object.keys(deliveryAddress).length !== 0 && this.step === 1
    //       )
    //     )
    //     .subscribe(deliveryAddress => {
    //       this.deliveryAddress = deliveryAddress;
    //       this.nextStep(2);
    //       this.refreshCart();
    //       this.cd.detectChanges();
    //     })
    // );

    console.log("GOT HERE");


    // // step2: select delivery mode
    // this.subscriptions.push(
    //   this.checkoutService
    //     .getSelectedDeliveryModeCode()
    //     .pipe(filter(selected => selected !== '' && this.step === 2))
    //     .subscribe(selectedMode => {
    //       this.nextStep(3);
    //       this.refreshCart();
    //       this.shippingMethod = selectedMode;
    //       this.cd.detectChanges();
    //     })
    // );

    // step3: set payment information
    // this.subscriptions.push(
    //   this.checkoutService
    //     .getPaymentDetails()
    //     .pipe(
    //       filter(
    //         paymentInfo =>
    //           Object.keys(paymentInfo).length !== 0 && this.step === 3
    //       )
    //     )
    //     .subscribe(paymentInfo => {
    //       if (!paymentInfo['hasError']) {
    //         this.nextStep(4);
    //         this.paymentDetails = paymentInfo;
    //         this.cd.detectChanges();
    //       } else {
    //         Object.keys(paymentInfo).forEach(key => {
    //           if (key.startsWith('InvalidField')) {
    //             this.globalMessageService.add({
    //               type: GlobalMessageType.MSG_TYPE_ERROR,
    //               text: 'InvalidField: ' + paymentInfo[key]
    //             });
    //           }
    //         });
    //         this.checkoutService.clearCheckoutStep(3);
    //       }
    //     })
    // );

    // step4: place order
    this.subscriptions.push(
      this.checkoutService
        .getOrderDetails()
        .pipe(
          filter(order => Object.keys(order).length !== 0 && this.step === 4)
        )
        .subscribe(() => {
          // checkout steps are done
          this.done = true;
          this.routingService.go({ route: ['orderConfirmation'] });
        })
    );

  }

  setStep(backStep: number): void {
    this.nextStep(backStep);
  }

  nextStep(step: number): void {
    const previousStep = step - 1;

    this.navs.forEach(function (nav) {
      if (nav.id === previousStep) {
        nav.status.completed = true;
      }
      if (nav.id === step) {
        nav.status.active = true;
        nav.status.disabled = false;
      } else {
        nav.status.active = false;
      }

      nav.progressBar = nav.status.active || nav.status.completed;
    });

    this.step = step;
    this.tAndCToggler = false;
  }

  addAddress({
    newAddress,
    address
  }: {
    newAddress: boolean;
    address: Address;
  }): void {
    if (newAddress) {
      this.checkoutService.createAndSetAddress(address);
      return;
    }
    // if the selected address is the same as the cart's one
    if (this.deliveryAddress && address.id === this.deliveryAddress.id) {
      this.nextStep(2);
      return;
    }
    this.checkoutService.setDeliveryAddress(address);
    return;
  }

  setDeliveryMode({ deliveryModeId }: { deliveryModeId: string }): void {
    // if the selected shipping method is the same as the cart's one
    if (this.shippingMethod && this.shippingMethod === deliveryModeId) {
      this.nextStep(3);
      return;
    }
    this.checkoutService.setDeliveryMode(deliveryModeId);
    return;
  }

  addPaymentInfo({
    newPayment,
    payment,
    billingAddress
  }: {
    newPayment: boolean;
    payment: PaymentDetails;
    billingAddress: Address;
  }): void {
    payment.billingAddress = billingAddress
      ? billingAddress
      : this.deliveryAddress;

    if (newPayment) {
      this.checkoutService.createPaymentDetails(payment);
      return;
    }

    // if the selected payment is the same as the cart's one
    if (this.paymentDetails && this.paymentDetails.id === payment.id) {
      this.nextStep(4);
      return;
    }

    this.checkoutService.setPaymentDetails(payment);
  }

  placeOrder(): void {
    this.checkoutService.placeOrder();
  }

  toggleTAndC(): void {
    this.tAndCToggler = !this.tAndCToggler;
  }

  initializeCheckoutNavBar(): CheckoutNavBarItem[] {
    return [
      {
        id: 1,
        label: '1. Shipping Address',
        status: {
          disabled: false,
          completed: false,
          active: true
        },
        progressBar: true
      },
      {
        id: 2,
        label: '2. Shipping Method',
        status: {
          disabled: true,
          completed: false,
          active: false
        },
        progressBar: false
      },
      {
        id: 3,
        label: '3. Payment',
        status: {
          disabled: true,
          completed: false,
          active: false
        },
        progressBar: false
      },
      {
        id: 4,
        label: '4. Review',
        status: {
          disabled: true,
          completed: false,
          active: false
        },
        progressBar: false
      }
    ];
  }

  clearCheckoutNavBar(): void {
    this.navs = [];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    if (!this.done) {
      this.checkoutService.clearCheckoutData();
    }
    this.clearCheckoutNavBar();
  }
}
