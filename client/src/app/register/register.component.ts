import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit { 
  submitted = false;
  result:any = {};

  constructor(private fb: FormBuilder, private _authService: AuthService) { }

  registrationForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', Validators.required]
  }) 

  ngOnInit(): void {
  }

  get firstname(){
    return this.registrationForm.get('firstname');
  }  
  get lastname(){
    return this.registrationForm.get('lastname');
  } 

  get email(){
    return this.registrationForm.get('email');
  }

  get password(){
    return this.registrationForm.get('password');
  }  

  onSubmit(){
    this.submitted = true;
    console.log(this.registrationForm.value);
    this._authService.signup(this.registrationForm.value)
        .subscribe(
          response => { 
            this.result.message = response.message;
            this.result.success = response.success; 
            console.log(response)
          },
          error => {
            this.result.message = error.error.message;
            this.result.success = error.error.success; 
          }
        )
  }
}
