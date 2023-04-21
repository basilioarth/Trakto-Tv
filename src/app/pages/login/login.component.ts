import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public isSubmitting: boolean;

  constructor(){
    this.isSubmitting = false;
  }

  onSubmit(f: NgForm){
    this.isSubmitting = true;
    console.log(f.value);
    setTimeout(() => this.isSubmitting = false, 5000);
  }
}
