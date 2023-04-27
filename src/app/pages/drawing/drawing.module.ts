import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DrawingComponent } from './drawing.component';
import { HeaderModule } from 'src/app/components/header/header.module';

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