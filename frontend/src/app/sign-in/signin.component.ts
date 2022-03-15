import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;
  private subscription: Subscription | undefined;

  constructor(private fb: FormBuilder) { 
    this.myForm = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  uniqueEmailValidator(control: FormControl): { [key: string]: boolean } | null {
    if (control.value === 'asaad') {
      return {'unique': false};
    }
    return null;
  }

  onSubmit() {

  }

}
