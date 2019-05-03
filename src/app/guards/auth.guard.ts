import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseAuth } from '@angular/fire';
import { AuthService } from '@app/auth.service';
import { LoginComponent } from '@app/admin/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService, private _router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.authService.isLoggedIn()) {return true}

    // Navigate to the login page with extras
    this._router.navigate(['admin','login'], {queryParams: {redirectUrl: state.url}});
    return false;

  }
}
