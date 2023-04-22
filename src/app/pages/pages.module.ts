import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './login/login.module';
import { OpeningModule } from './opening/opening.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    OpeningModule
  ],
  exports: [
    LoginModule,
    OpeningModule
  ]
})
export class PagesModule { }
