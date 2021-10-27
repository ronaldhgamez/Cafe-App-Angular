import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {


  miFormulario: FormGroup = this.fb.group({
    usuario: ['diazr', [Validators.required]],
    contrasena: ['admi', [Validators.required]]

  });

  constructor(private fb: FormBuilder) { }

  login() {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }

  /*   public username: string;
    public password: string;
  
    constructor() {
      this.username = "";
      this.password = "";
    }
  
    validateCredentials() {
      this.username = (<HTMLInputElement>document.getElementById("username")).value;
      this.password = (<HTMLInputElement>document.getElementById("password")).value;
  
      if (this.username === "admin" && this.password === "pass") {
        alert("Welcome admin!");
      } else {
        alert("Incorrect credentials");
      }
    } */

}
