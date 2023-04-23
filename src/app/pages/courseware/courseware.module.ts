import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursewareComponent } from './courseware.component';

import { HeaderModule } from 'src/app/components/header/header.module';
import { SlideThumbnailModule } from 'src/app/components/slide-thumbnail/slide-thumbnail.module';

@NgModule({
  declarations: [CoursewareComponent],
  imports: [
    CommonModule,
    HeaderModule,
    SlideThumbnailModule
  ],
  exports: [CoursewareComponent]
})
export class CoursewareModule { }
