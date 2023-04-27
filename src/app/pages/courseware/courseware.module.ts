import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from 'src/app/components/header/header.module';
import { InternalErrorModule } from 'src/app/components/internal-error/internal-error.modules';
import { LoadingDataModule } from 'src/app/components/loading-data/loading-data.module';
import { NotFoundModule } from 'src/app/components/not-found/not-found.module';
import { SlideThumbnailModule } from 'src/app/components/slide-thumbnail/slide-thumbnail.module';

import { CoursewareComponent } from './courseware.component';

@NgModule({
  declarations: [CoursewareComponent],
  imports: [
    CommonModule,
    HeaderModule,
    InternalErrorModule,
    LoadingDataModule,
    NotFoundModule,
    SlideThumbnailModule,
  ],
  exports: [CoursewareComponent]
})
export class CoursewareModule { }
