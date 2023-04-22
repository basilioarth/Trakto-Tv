import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  date: string;

  @Input()
  backgroundColor: string;

  @Input()
  showChangeEnvironmentOption: boolean;

  constructor(private router: Router){
    this.date = "";
    this.backgroundColor = "";
    this.showChangeEnvironmentOption = false;
  }

  changeEnvironment(){
    this.router.navigate(['opening']);
  }
}
