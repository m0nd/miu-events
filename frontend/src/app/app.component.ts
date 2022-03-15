import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      <a mat-button [routerLink]="['home']">
        <span>MIU-Events</span>  
      </a>
      <span class="toolbar-spacer"></span>
      <a mat-button color="primary" [routerLink]="['sign-in']">
        Sign In
      </a>
      <a mat-button [routerLink]="['sign-up']">
        Sign Up
      </a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
