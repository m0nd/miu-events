import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubj$ = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.loggedInSubj$.asObservable();

  constructor(private http: HttpClient, private router: Router) { 
    const token = localStorage.getItem('miu-events.auth');
    // Just use the boolean value of the token
    this.loggedInSubj$.next(!!token);
  }

  doLogin(userDetails: any, url: string) {
    this.http.post(url, userDetails).subscribe((response:any) => {
      if (response.success) {
        // store the token in local storage
        localStorage.setItem('miu-events.auth', response.token);
        const decodedToken = jwt_decode(response.token) as {id: string};
        this.loggedInSubj$.next(true);
        // redirect user to their dashboard
        this.router.navigate([decodedToken.id, 'dashboard']);
      }
    })
  }

  logOut() {
    this.loggedInSubj$.next(false);
    localStorage.removeItem('miu-events.auth');
  }
}
