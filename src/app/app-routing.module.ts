import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { ListComponent } from './components/student/list/list.component';
import { AddComponent } from './components/student/add/add.component';
import { DetailsComponent } from './components/student/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children :[
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'update/:id',
        component: AddComponent
      },
      {
        path: 'detail/:id',
        component: DetailsComponent
      }
      ],
    canActivate : [AuthService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
