/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OccApiConfiguration } from './occ-api-configuration';

import { MiscsService } from './services/miscs.service';
import { CatalogsService } from './services/catalogs.service';
import { ComponentService } from './services/component.service';
import { PageService } from './services/page.service';
import { CustomerGroupsService } from './services/customer-groups.service';
import { ExportService } from './services/export.service';
import { FeedsService } from './services/feeds.service';
import { ForgottenPasswordsService } from './services/forgotten-passwords.service';
import { OrdersService } from './services/orders.service';
import { ProductsService } from './services/products.service';
import { PromotionsService } from './services/promotions.service';
import { StoresService } from './services/stores.service';
import { UsersService } from './services/users.service';
import { CartsService } from './services/carts.service';
import { SaveCartService } from './services/save-cart.service';
import { VouchersService } from './services/vouchers.service';

/**
 * Provider for all OccApi services, plus OccApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    OccApiConfiguration,
    MiscsService,
    CatalogsService,
    ComponentService,
    PageService,
    CustomerGroupsService,
    ExportService,
    FeedsService,
    ForgottenPasswordsService,
    OrdersService,
    ProductsService,
    PromotionsService,
    StoresService,
    UsersService,
    CartsService,
    SaveCartService,
    VouchersService
  ],
})
export class OccApiModule { }
