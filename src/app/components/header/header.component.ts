import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  theme: string;

  @Input()
  backgroundColor: string;

  @Input()
  showChangeEnvironmentOption: boolean;

  color: string;

  date: string;

  constructor(private router: Router){
    this.theme = "";
    this.backgroundColor = "";
    this.showChangeEnvironmentOption = false;

    this.color = '';
    this.date = '';
  }

  ngOnInit(): void {
    if(this.theme == 'dark'){
      this.color = 'var(--neutral-ligth)';
    } else {
      this.color = 'var(--neutral-cloudy)';
    }
    this.date = this.getCurrentDate();
  }

  changeEnvironment(){
    this.router.navigate(['opening']);
  }

  getCurrentDate():string {
    var date = new Date();
    return date.toLocaleDateString('pt');
  }
}
