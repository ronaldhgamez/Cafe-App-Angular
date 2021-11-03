import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { EmployeesComponentComponent } from './components/employees-component/employees-component.component';
import { EmployeesDetailsComponent } from './components/employees-details/employees-details.component';
import { AssingBoxesComponent } from './components/assing-boxes/assing-boxes.component';


import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  {
    path: '',
    component: LoginComponentComponent
  },
  {
    path: 'employees',
    component: EmployeesComponentComponent
  },
  {
    path: 'employees/details/:id',
    component: EmployeesDetailsComponent
  },
  {
    path: 'assign-daily-boxes',
    component: AssingBoxesComponent
  },
  {
    path: 'register',
    component: RegisterComponentComponent
  },
]; // sets up routes constant where you define your routes



@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    EmployeesComponentComponent,
    EmployeesDetailsComponent,
    AssingBoxesComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, //para el retorno del usuario tipo json
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
