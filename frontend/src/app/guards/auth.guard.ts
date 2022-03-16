import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isLoggedIn: boolean;
  constructor(private auth: AuthService) {
    this.isLoggedIn = false;
  }

  ngOnInit() {
    this.auth.isLoggedIn$.subscribe((status:boolean) => {
      this.isLoggedIn = status;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
    return this.isLoggedIn;
  }
  
}
