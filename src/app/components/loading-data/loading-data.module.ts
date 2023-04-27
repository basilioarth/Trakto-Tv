import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoadingDataComponent } from './loading-data.component';

@NgModule({
  declarations: [LoadingDataComponent],
  imports: [
    CommonModule,
  ],
  exports: [LoadingDataComponent]
})
export class LoadingDataModule { }