import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseApiUrl: string = 'http://localhost:3000/api';
  constructor() { }

  get baseUrl() {
    return this.baseApiUrl;
  }
}
