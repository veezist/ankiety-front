import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
  MatSelectModule,
  MatRadioModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { SurveyListComponent } from './pages/survey-list/survey-list.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { ForgotPasswordDialogComponent } from './pages/authentication/forgot-password/forgot-password-dialog/forgot-password-dialog.component';
import { SurveyCreatorComponent } from './pages/survey-creator/survey-creator.component';
import { SurveySavedDialogComponent } from './pages/survey-creator/survey-saved-dialog/survey-saved-dialog.component';
import { CreatorAnswerComponent } from './pages/survey-creator/survey/creator-answer/creator-answer.component';
import { CreatorQuestionComponent } from './pages/survey-creator/survey/creator-question/creator-question.component';
import { FormsModule } from '@angular/forms';
import { AuthHttpInterceptor } from './other/auth-http-interceptor';
import { CookieService } from 'ngx-cookie-service';
import { DndModule } from 'ng2-dnd';
import { CreatorQuestionContainerComponent } from './pages/survey-creator/survey/creator-question-container/creator-question-container.component';

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
    SurveySavedDialogComponent,
    CreatorAnswerComponent,
    CreatorQuestionComponent,
    CreatorQuestionContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DndModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
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
    MatSelectModule,
    MatRadioModule
  ],
  entryComponents: [
    ForgotPasswordDialogComponent,
    SurveySavedDialogComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
