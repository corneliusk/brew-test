import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {;

  private user: Observable<firebase.User>;
  public userDetails: firebase.User = null;
  public redirectUrl:string;
  provider: firebase.auth.GoogleAuthProvider;
  constructor( private _afAuth: AngularFireAuth, private _router: Router, private ngZone:NgZone) {
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.user = _afAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        }
        else {
          this.userDetails = null;
        }
      }
    )
   }

  doGoogleLogin():Promise<firebase.auth.UserCredential> {
    return this._afAuth.auth.signInWithPopup(this.provider)
  }
  logout(){
    this._afAuth.auth.signOut()
      .then((res) => {
        this.ngZone.run(()=> {
          this._router.navigate(['/'])
        })
      });
  }
  isLoggedIn():boolean {
    console.log('checking logins')
    return this.userDetails != null;
  }
}
