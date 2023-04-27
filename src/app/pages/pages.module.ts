import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursewareModule } from './courseware/courseware.module';
import { DesignsPreviewModule } from './designs-preview/designs-preview.module';
import { DrawingModule } from './drawing/drawing.module';
import { LoginModule } from './login/login.module';
import { OpeningModule } from './opening/opening.module';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoursewareModule,
    DesignsPreviewModule,
    DrawingModule,
    LoginModule,
    OpeningModule,
    ComponentsModule,
  ],
  exports: [
    CoursewareModule,
    DesignsPreviewModule,
    DrawingModule,
    LoginModule,
    OpeningModule,
  ]
})
export class PagesModule { }
