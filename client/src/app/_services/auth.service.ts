import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/api/users/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(loginData: any): Observable<any> {
    return this.http.post(AUTH_API + 'login', loginData, httpOptions);
  }
  signup(userData:any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', userData, httpOptions);
  }
}
