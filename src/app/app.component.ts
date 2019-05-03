import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CollapseDirective } from 'ngx-bootstrap/collapse/public_api';
import {AuthService} from "@app/auth.service";
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'brewery finder';
  isCollapsed = true;
  collapse: CollapseDirective;

  constructor(
      private router: Router,
      private _auth:AuthService,
      private _route:ActivatedRoute,
      iconRegistry:MatIconRegistry,
      sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon('menu',
    sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/menu.svg')
    )
    iconRegistry.addSvgIcon('heart',
    sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/heart.svg'))
  }
  getRouter():Router {
    return this.router
  }
  toggleAuth() {
    if(this.isLoggedIn) {
      this.logout();
    } else {
      this.router.navigate(['admin', 'login']);
    }
  }
  private logout() {
    this._auth.logout();
  }

  get isLoggedIn():boolean {
    return this._auth.isLoggedIn();
  }
  get loginMessage():string {
    return (this.isLoggedIn) ? 'log out' : 'log in';
  }

}
