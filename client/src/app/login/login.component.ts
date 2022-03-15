import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  submitted = false;
  result:any = {};

  constructor(private fb: FormBuilder, private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4)]], 
      password: ['', Validators.required]
    })
  }
  get email(){
    return this.loginForm.get('email');
  }  

  get password(){
    return this.loginForm.get('password');
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.loginForm.value);
    this._authService.login(this.loginForm.value)
        .subscribe(
          response => { 
            this.result.message = response.message;
            this.result.success = response.success; 
            console.log(response.token)
            localStorage.setItem(
              "LoggedInUserData",
              JSON.stringify(response)
            );
            this._router.navigate(["protected"])
          },
          error => {
            this.result.message = error.error.message;
            this.result.success = error.error.success; 
            console.log(error);
          }
        )
  }
}
