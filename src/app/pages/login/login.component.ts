import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginReturn } from 'src/app/interfaces/login-return.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public isSubmitting: boolean;
  public isUnauthorized: boolean;
  public gotInternalError: boolean;

  constructor(private authService: AuthService, private router: Router){
    this.isSubmitting = false;
    this.isUnauthorized = false;
    this.gotInternalError = false;
  }

  onSubmit(f: NgForm){
    this.isSubmitting = true;
    this.isUnauthorized = false;
    this.gotInternalError = false;
    
    this.authService.signin(f.value.email, f.value.password).subscribe({
      next: (response: string) => {
        var formatedResponse: LoginReturn = JSON.parse(response);
        this.authService.storageItem('access_token', formatedResponse.access_token);
        this.authService.storageItem('refresh_token', formatedResponse.refresh_token);

        this.router.navigate(['opening']);
      },
      error: (err) => {
        this.isSubmitting = false;

        if(err.status == 401){
          this.isUnauthorized = true;
        } else {
          this.gotInternalError = true;
        }
      },
      complete: () => {this.isSubmitting = false}
    });
  }
}
