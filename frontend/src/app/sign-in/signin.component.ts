import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;
  private subscription: Subscription | undefined;

  constructor(private fb: FormBuilder, private api: ApiService, private auth: AuthService) { 
    this.myForm = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.doLogin(this.myForm.value, this.api.baseUrl + '/users/login');
  }

}
