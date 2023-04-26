import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthPermissions } from './permissions/auth.permissions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private permissions: AuthPermissions, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.permissions.canActivate()){
        return true;
      } else {
        sessionStorage.getItem('access_token') ? alert("Seu acesso expirou! Por favor, faça o login novamente.") : alert("Acesso negado! Por favor, faça o login no sistema.");
        sessionStorage.clear();
        return this.router.parseUrl('/login'); // is a UrlTree of the /login route.
      }
  }
  
}
