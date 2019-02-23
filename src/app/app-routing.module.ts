import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './pages/authentication/register/register.component';
import { SurveyListComponent } from './pages/survey-list/survey-list.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { SurveyCreatorComponent } from './pages/survey-creator/survey-creator.component';

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
