import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './authentication/register.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { LoginComponent } from './authentication/login.component';

const routes: Routes = [
  { path: 'surveys', component: SurveyListComponent }
  ,{ path: 'login', component: LoginComponent }
  ,{ path: 'register', component: RegisterComponent }
  ,{ path: '', redirectTo: 'surveys', pathMatch: 'full' }
  ,{ path: '**', redirectTo: 'surveys', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
