import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './login/login.module';
import { OpeningModule } from './opening/opening.module';
import { CoursewareModule } from './courseware/courseware.module';
import { DesignsPreviewModule } from './designs-preview/designs-preview.module';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    OpeningModule,
    CoursewareModule,
    DesignsPreviewModule,
    ComponentsModule
  ],
  exports: [
    LoginModule,
    OpeningModule,
    CoursewareModule,
    DesignsPreviewModule
  ]
})
export class PagesModule { }
