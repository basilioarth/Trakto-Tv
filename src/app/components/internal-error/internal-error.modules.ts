import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InternalErrorComponent } from './internal-error.component';

@NgModule({
  declarations: [InternalErrorComponent],
  imports: [
    CommonModule,
  ],
  exports: [InternalErrorComponent]
})
export class InternalErrorModule { }