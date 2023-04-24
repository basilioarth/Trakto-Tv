import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignsPreviewComponent } from './designs-preview.component';

import { HeaderModule } from 'src/app/components/header/header.module';
import { SlideThumbnailModule } from 'src/app/components/slide-thumbnail/slide-thumbnail.module';

@NgModule({
  declarations: [DesignsPreviewComponent],
  imports: [
    CommonModule,
    HeaderModule,
    SlideThumbnailModule
  ],
  exports: [DesignsPreviewComponent]
})
export class DesignsPreviewModule { }