import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  sum : number;

  constructor() {
  }

  onSum(message : number)
  {
    this.sum += message;
  }
}
