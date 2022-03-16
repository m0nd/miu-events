import { EventsComponent } from './_components/events/events.component'; 
import { SignupComponent } from './_components/signup/signup.component';
import { LoginComponent } from './_components/login/login.component';
import { ProtectedComponent } from './_components/protected/protected.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: SignupComponent },
  { path: 'protected', component: ProtectedComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, SignupComponent, EventsComponent, ProtectedComponent ];
