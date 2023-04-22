import { Component } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.css']
})
export class OpeningComponent {
  onClick(){
    alert("Clicou!");
  }

  getCurrentDate(): string{
    var date = moment();
    return date.format('DD/MM/YYYY');
  }
}
