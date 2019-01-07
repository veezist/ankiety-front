import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatBadgeModule,
  MatTabsModule,
  MatGridListModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatOptionModule,
  MatSelectModule
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
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { QuestionComponent } from './survey/question/question.component';
import { SurveySavedDialogComponent } from './survey-creator/survey-saved-dialog/survey-saved-dialog.component';
import { AnswerComponent } from './survey/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    SurveyListComponent,
    LoginComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ForgotPasswordDialogComponent,
    SurveyCreatorComponent,
    QuestionComponent,
    SurveySavedDialogComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatBadgeModule,
    MatTabsModule,
    MatGridListModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule
  ],
  entryComponents: [
    ForgotPasswordDialogComponent,
    SurveySavedDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
