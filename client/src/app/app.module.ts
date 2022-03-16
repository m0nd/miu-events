import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import some important modules
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';    
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { AuthService } from './_services/auth.service';
import { EventService } from './_services/event.service';
import { EventsComponent } from './_components/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    
    routingComponents,
          EventsComponent,
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
