import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'brewery finder';
  isCollapsed = true;

  constructor(private router: Router){

  }
  getRouter():Router {
    return this.router
  }
}
