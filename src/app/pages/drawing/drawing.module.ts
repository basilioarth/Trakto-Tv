import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderModule } from 'src/app/components/header/header.module';

import { DrawingComponent } from './drawing.component';

@NgModule({
  declarations: [DrawingComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule
  ],
  exports: [DrawingComponent]
})
export class DrawingModule { }