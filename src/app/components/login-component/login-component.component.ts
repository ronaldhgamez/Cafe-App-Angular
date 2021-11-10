import { Component, OnInit } from '@angular/core';
/* import { FormBuilder, FormGroup, Validators } from '@angular/forms'; */
import { Router } from '@angular/router'; // CLI imports router
/* import { AuthService } from 'src/app/services/auth.service'; */
import { ApiCalls } from 'src/app/classes/api-calls';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  /*  miFormulario: FormGroup = this.fb.group({
     usuario: ['', [Validators.required]],
     contrasena: ['', [Validators.required]]
 
   }); */

  private api_calls: ApiCalls;

  constructor(private router: Router) {
    localStorage.setItem('isLoggedIn', 'false');
    this.api_calls = new ApiCalls();
  }

  /* login() {
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
  } */

  async login() {
    var username = (<HTMLInputElement>document.getElementById("username")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;

    const res = await this.api_calls.validateAdmin(username, password);

    if (res.valid) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigateByUrl('/employees');
    } else {
      Swal.fire("Mensaje", res.msg);
    }
  }

}
