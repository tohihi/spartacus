import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { BootstrapModule } from './../../../bootstrap.module';
/* Components */
import { PaginationComponent } from './pagination/pagination.component';
import { SortingComponent } from './sorting/sorting.component';
import { I18nModule } from '@spartacus/core';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    BootstrapModule,
    I18nModule,
  ],
  declarations: [PaginationComponent, SortingComponent],
  exports: [PaginationComponent, SortingComponent],
})
export class PaginationAndSortingModule {}
