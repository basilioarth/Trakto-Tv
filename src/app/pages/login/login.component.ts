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

  constructor(private authService: AuthService, private router: Router){
    this.isSubmitting = false;
  }

  onSubmit(f: NgForm){
    this.isSubmitting = true;
    
    this.authService.signin(f.value.email, f.value.password).subscribe({
      next: (response: string) => {
        var formatedResponse: LoginReturn = JSON.parse(response);
        this.authService.storageItem('access_token', formatedResponse.access_token);
        this.authService.storageItem('refresh_token', formatedResponse.refresh_token);

        this.router.navigate(['opening']);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {this.isSubmitting = false}
    });
  }
}
