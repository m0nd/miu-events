import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';
import jwt_decode from 'jwt-decode';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'signup-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  myForm: FormGroup;
  private subscription: Subscription | undefined;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private api: ApiService, private router: Router, private auth: AuthService) { 
    this.myForm = formBuilder.group({
      // params: default-val, validators (sync), validators (async)
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
    });
  }

  onSubmit() {
    this.auth.doLogin(this.myForm.value, this.api.baseUrl + '/users/signup');
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
