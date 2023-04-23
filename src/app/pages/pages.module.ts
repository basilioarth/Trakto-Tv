import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './login/login.module';
import { OpeningModule } from './opening/opening.module';
import { CoursewareModule } from './courseware/courseware.module';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    OpeningModule,
    CoursewareModule,
    ComponentsModule
  ],
  exports: [
    LoginModule,
    OpeningModule,
    CoursewareModule
  ]
})
export class PagesModule { }
