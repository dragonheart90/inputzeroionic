import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private storage: Storage,public nav: NavController) { }
  token:any;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve) => {
        this.storage.ready().then(() => {
          this.storage.get('token').then((val) => {
            console.log('Your user name is', val);
            this.token = val;
            console.log(this.token);
        if (this.token) {
        resolve(true);
        } else {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        resolve(false);
        }
            });
        
        });
        });
  }
  
}
