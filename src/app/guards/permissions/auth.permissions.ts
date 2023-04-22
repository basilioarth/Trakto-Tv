import { Injectable } from "@angular/core";
import { AuthService } from "src/app/services/auth/auth.service";

@Injectable()
export class AuthPermissions {
    constructor(private authService: AuthService){}

    canActivate(): boolean{
    let token = this.authService.getItem('access_token');

    if (token == null) {
      return false;
    } else if(this.authService.isAuthenticationExpired(token)) {
       this.authService.storageItem('access_token', this.authService.getItem('refresh_token'));
       token = this.authService.getItem('access_token');
       
       if(token == null){
        return false;
       } else {
        return this.authService.isAuthenticationExpired(token) ? false : true
       }
    } else {
       return true;
    }
  }
}