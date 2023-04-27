import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.css']
})
export class OpeningComponent {
  constructor(private router: Router){}

  navigateToCourseware(){
    this.router.navigate(['courseware']);
  }

  navigateToDrawing(){
    this.router.navigate(['drawing']);
  }
}
