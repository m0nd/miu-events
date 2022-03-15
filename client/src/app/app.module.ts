import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import some important modules
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';    
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component'; 

@NgModule({
  declarations: [
    AppComponent,
    
    routingComponents,
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
