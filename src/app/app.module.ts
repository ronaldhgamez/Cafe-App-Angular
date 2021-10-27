import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { EmployeesComponentComponent } from './components/employees-component/employees-component.component';
import { EmployeesDetailsComponent } from './components/employees-details/employees-details.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    EmployeesComponentComponent,
    EmployeesDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, //para el retorno del usuario tipo json
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
