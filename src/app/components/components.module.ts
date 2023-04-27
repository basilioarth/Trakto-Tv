import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from './header/header.module';
import { InternalErrorModule } from './internal-error/internal-error.modules';
import { LoadingDataModule } from './loading-data/loading-data.module';
import { NotFoundModule } from './not-found/not-found.module';
import { SlideThumbnailModule } from './slide-thumbnail/slide-thumbnail.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    InternalErrorModule,
    LoadingDataModule,
    NotFoundModule,
    SlideThumbnailModule,
  ],
  exports: [
    HeaderModule,
    InternalErrorModule,
    LoadingDataModule,
    NotFoundModule,
    SlideThumbnailModule,
  ]
})
export class ComponentsModule { }
