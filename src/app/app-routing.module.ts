import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './pages/authentication/register/register.component';
import { SurveyListComponent } from './pages/survey-list/survey-list.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { SurveyCreatorComponent } from './pages/survey-creator/survey-creator.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EmailChangeComponent } from './pages/profile/email-change/email-change.component';
import { PasswordChangeComponent } from './pages/profile/password-change/password-change.component';
import { SurveyFillComponent } from './pages/survey-fill/survey-fill.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';

const routes: Routes = [
   { path: 'creator', component: SurveyCreatorComponent }
  ,{ path: 'login', component: LoginComponent }
  ,{ path: 'register', component: RegisterComponent }
  ,{ path: 'forgot-password', component: ForgotPasswordComponent }
  ,{ path: 'surveys', component: SurveyListComponent }
  ,{ path: 'email_change', component: EmailChangeComponent}
  ,{ path: 'password_change', component: PasswordChangeComponent}
  ,{ path: 'profile', component: ProfileComponent }
  ,{ path: 'user-panel', component: UserPanelComponent }
  ,{ path: 'survey/:id', component: SurveyFillComponent }
  ,{ path: '', component: HomeComponent }
  ,{ path: '**', redirectTo: '', pathMatch: 'full'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
