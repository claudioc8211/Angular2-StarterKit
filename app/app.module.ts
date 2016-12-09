import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {NavbarComponent} from './components/navbar/navbar.component';

import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, 
                  HomeComponent, 
                  NavbarComponent, 
                  AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
