import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { SlideThumbnailModule } from './slide-thumbnail/slide-thumbnail.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    SlideThumbnailModule
  ],
  exports: [
    HeaderModule,
    SlideThumbnailModule
  ]
})
export class ComponentsModule { }
