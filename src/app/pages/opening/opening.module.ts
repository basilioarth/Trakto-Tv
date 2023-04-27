import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from 'src/app/components/header/header.module';

import { OpeningComponent } from './opening.component';

@NgModule({
  declarations: [OpeningComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [OpeningComponent]
})
export class OpeningModule { }