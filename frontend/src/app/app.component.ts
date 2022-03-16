import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar class="main-toolbar">
      <a mat-button [routerLink]="['home']">
        <span>MIU-Events</span>  
      </a>
      <mat-form-field appearance="outline" class="main-search">
        <mat-label>Search for anything...</mat-label>
        <input matInput type="search" [value]="searchTerm" placeholder="E.g. live music" (keyup.enter)="searchEvents($event)">
        <button *ngIf="searchTerm" matSuffix mat-icon-button aria-label="Clear" (click)="searchTerm=''">
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
      
      <span class="toolbar-spacer"></span>
      <a mat-button color="accent" [routerLink]="['browse']">
        Browse Events
      </a>
      <span *ngIf="!(auth.isLoggedIn$ | async); else loggedIn">
        <a mat-button color="primary" [routerLink]="['sign-in']">
          Sign In
        </a>
        <a mat-button [routerLink]="['sign-up']">
          Sign Up
        </a>  
      </span>  
      <ng-template #loggedIn>
        <button mat-button color="warning" (click)="logOut()">Log Out</button>
      <!-- <a mat-button color="primary" [routerLink]="['sign-in']">
        </a> -->
      </ng-template>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm = '';
  constructor(public auth: AuthService, private http: HttpClient, private api: ApiService) {

  }

  searchEvents(event: any) {
    this.searchTerm = event.srcElement.value;
    console.log(this.searchTerm);
    
    // Make a get request with user input to the API
    this.http.get(this.api.baseUrl + '/events/search?searchTerm=' + this.searchTerm, {}).subscribe(response => {
      console.log(response);
    })
  }

  logOut() {
    this.auth.logOut();
  }

  // /events/:id req.params
  // /events/search?term=xyz req.query
}
