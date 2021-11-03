import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // CLI imports router
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  miFormulario: FormGroup = this.fb.group({
    usuario: ['diazr', [Validators.required]],
    contrasena: ['admin', [Validators.required]]

  });

  public username: string;
  public password: string;
  
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.username = "";
    this.password = "";
  }

  login() {
    console.log(this.miFormulario.value);
    const { usuario, contrasena } = this.miFormulario.value;

    this.authService.login(usuario, contrasena)
      .subscribe(ok => {
        console.log(ok);
        if (ok === true) {
          this.router.navigateByUrl('/employees');
        } else {
          Swal.fire('Error', ok, 'error');
        }
      });
  }

  /* login2() {
    this.username = (<HTMLInputElement>document.getElementById("username")).value;
    this.password = (<HTMLInputElement>document.getElementById("password")).value;

    if (this.username === "admin" && this.password === "pass") {
      alert("Welcome admin!");
      //this.router.navigateByUrl('/rutadelaventana');
      console.log("Abriendo menú del Administrador")
      //This is where its broke - below:
      this.router.navigateByUrl('/employees');
    } else {
      alert("Incorrect credentials");
    }

  } */

}
