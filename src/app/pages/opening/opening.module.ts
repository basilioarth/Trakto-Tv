import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpeningComponent } from './opening.component';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [OpeningComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [OpeningComponent]
})
export class OpeningModule { }