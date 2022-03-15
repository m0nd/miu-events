import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'signup-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  myForm: FormGroup;
  //private baseApiUrl: string = 'http://localhost:3000/api';
  private subscription: Subscription | undefined;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { 
    this.myForm = formBuilder.group({
      // params: default-val, validators (sync), validators (async)
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
