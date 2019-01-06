import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './authentication/register/register.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';

const routes: Routes = [
   { path: 'creator', component: SurveyCreatorComponent }
  ,{ path: 'login', component: LoginComponent }
  ,{ path: 'register', component: RegisterComponent }
  ,{ path: 'forgot-password', component: ForgotPasswordComponent }
  ,{ path: 'surveys', component: SurveyListComponent }
  ,{ path: '', component: HomeComponent }
  ,{ path: '**', redirectTo: 'surveys', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
