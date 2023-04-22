import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JwtHelperService  } from '@auth0/angular-jwt';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL: string;
  private helper = new JwtHelperService();

  constructor(private http: HttpClient) {
    this.authURL = environment.baseURL + 'auth';
  }

  signin(email: string, password: string): Observable<string>{
    let body = {
      "email": email,
      "password": password
    }

    const options = {
      responseType: 'text' as 'json'
    };

    return this.http.post<string>(`${this.authURL}/signin`, body, options);
  }

  isAuthenticationExpired(token: string):boolean {
    return this.helper.isTokenExpired(token);
  }

  getItem(key: string){
    return localStorage.getItem(key);
  }

  storageItem(key: string, value: any){
    localStorage.setItem(key, value);
  }

  removeItem(key: string){
    localStorage.removeItem(key);
  }

  clearStorage(){
    localStorage.clear();
  }

}
