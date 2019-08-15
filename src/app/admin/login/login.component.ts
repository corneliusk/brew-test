import { Component, OnInit, NgZone } from '@angular/core';
import {AuthService} from '../../auth.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  returnUrl:string;
  isLoggedIn: boolean;
  constructor(
    public _authService:AuthService,
    public _router: Router,
    private _route: ActivatedRoute,
    private _zone: NgZone
    ) { }

  ngOnInit() {
    this._route.queryParams
      .subscribe(params => this.returnUrl = params['redirectUrl' || '/']);
  }
  signInWithGoogle(): void {
    this._authService.doGoogleLogin()
      .then(res => {
        this._zone.run(
          ()=>{
            this._router.navigateByUrl(this.returnUrl);
          }
        )
      })
  }
  logout(){
    this._authService.logout();
  }

}
