import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  ConfigModule,
  CmsConfig,
  CmsPageTitleModule,
  I18nModule,
} from '@spartacus/core';
import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        BreadcrumbComponent: { selector: 'cx-breadcrumb' },
      },
    }),
    CmsPageTitleModule,
    I18nModule,
  ],
  declarations: [BreadcrumbComponent],
  entryComponents: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
