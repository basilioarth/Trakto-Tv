import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { OpeningComponent } from './pages/opening/opening.component';

import { AuthGuard } from './guards/auth.guard';
import { AuthPermissions } from './guards/permissions/auth.permissions';

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "opening", component: OpeningComponent, canActivate: [AuthGuard]},
  { path: "", redirectTo: "/login", pathMatch: "full"},
  { path: "**", redirectTo: "/login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard, AuthPermissions],
  exports: [RouterModule]
})
export class AppRoutingModule { }
