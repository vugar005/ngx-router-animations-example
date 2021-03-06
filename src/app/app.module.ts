import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {AppRoutingModule} from "./app-routing.module";
import { NavigationComponent } from './navigation/navigation.component';
import {HeaderComponent} from './header/header.component';
@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
    ],
  declarations: [
     AppComponent, 
     HomeComponent, 
     AboutComponent,
     NavigationComponent,
     HeaderComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
