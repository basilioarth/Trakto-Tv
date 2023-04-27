import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { OpeningComponent } from './pages/opening/opening.component';
import { CoursewareComponent } from './pages/courseware/courseware.component';
import { DrawingComponent } from './pages/drawing/drawing.component';
import { DesignsPreviewComponent } from './pages/designs-preview/designs-preview.component';

import { AuthGuard } from './guards/auth.guard';
import { AuthPermissions } from './guards/permissions/auth.permissions';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "opening", component: OpeningComponent, canActivate: [AuthGuard] },
  { path: "courseware", component: CoursewareComponent, canActivate: [AuthGuard] },
  { path: "drawing", component: DrawingComponent, canActivate: [AuthGuard]},
  { path: "preview", component: DesignsPreviewComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard, AuthPermissions],
  exports: [RouterModule]
})
export class AppRoutingModule { }
