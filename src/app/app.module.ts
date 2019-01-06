import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './authentication/register/register.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ForgotPasswordDialogComponent } from './authentication/forgot-password-dialog/forgot-password-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    SurveyListComponent,
    LoginComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ForgotPasswordDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ],
  entryComponents: [
    ForgotPasswordDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
