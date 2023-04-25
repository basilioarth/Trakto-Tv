import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { SlideThumbnailModule } from './slide-thumbnail/slide-thumbnail.module';
import { LoadingDataModule } from './loading-data/loading-data.module';
import { NotFoundModule } from './not-found/not-found.module';
import { InternalErrorModule } from './internal-error/internal-error.modules';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    SlideThumbnailModule,
    LoadingDataModule,
    NotFoundModule,
    InternalErrorModule
  ],
  exports: [
    HeaderModule,
    SlideThumbnailModule,
    LoadingDataModule,
    NotFoundModule,
    InternalErrorModule
  ]
})
export class ComponentsModule { }
