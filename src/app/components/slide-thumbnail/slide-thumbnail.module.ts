import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SlideThumbnailComponent } from './slide-thumbnail.component';

@NgModule({
  declarations: [SlideThumbnailComponent],
  imports: [
    CommonModule,
  ],
  exports: [SlideThumbnailComponent]
})
export class SlideThumbnailModule { }