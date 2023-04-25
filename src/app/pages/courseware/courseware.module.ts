import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursewareComponent } from './courseware.component';

import { HeaderModule } from 'src/app/components/header/header.module';
import { SlideThumbnailModule } from 'src/app/components/slide-thumbnail/slide-thumbnail.module';
import { LoadingDataModule } from 'src/app/components/loading-data/loading-data.module';
import { NotFoundModule } from 'src/app/components/not-found/not-found.module';
import { InternalErrorModule } from 'src/app/components/internal-error/internal-error.modules';

@NgModule({
  declarations: [CoursewareComponent],
  imports: [
    CommonModule,
    HeaderModule,
    SlideThumbnailModule,
    LoadingDataModule,
    NotFoundModule,
    InternalErrorModule
  ],
  exports: [CoursewareComponent]
})
export class CoursewareModule { }
