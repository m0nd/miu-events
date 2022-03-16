import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchForm: any = {};
  title = 'frontend';
  isLoggedIn = false;
  
constructor(private fb: FormBuilder, private _authService: AuthService) { }

  registrationForm = this.fb.group({
    search: [''] 
  }) 

  search(){

  }
  logout(){
    console.log("Clear localstorage data");
  }
}
