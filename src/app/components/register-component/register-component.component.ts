import { Component } from '@angular/core';
/* import { FormBuilder, FormGroup, Validators } from '@angular/forms'; */
import { Router } from '@angular/router';
/* import { AuthService } from '../../services/auth.service'; */
import { ApiCalls } from 'src/app/classes/api-calls';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {

  private api_calls: ApiCalls;
  
  constructor(/* private fb: FormBuilder, */ private router: Router) {
    this.api_calls = new ApiCalls();
  }


  back() {
    this.router.navigateByUrl('/employees');
  }


  async saveEmployee() {
    const fullname = (<HTMLInputElement>document.getElementById("fullname")).value;
    const id_card = (<HTMLInputElement>document.getElementById("id_card")).value;
    const phone_num = (<HTMLInputElement>document.getElementById("phone_num")).value;
    const emergency_num = (<HTMLInputElement>document.getElementById("emergency_num")).value;
    const gender = (<HTMLInputElement>document.getElementById("gender")).value;
    const birthdate = (<HTMLInputElement>document.getElementById("birthdate")).value;

    if(fullname.trim() == "" || phone_num.trim() == "" || gender.trim() == "" || birthdate.trim() == "" ) {
      Swal.fire("Advertencia", "Campos imcompletos");
      return;
    }
    const employee = {
      fullname, id_card, phone_num, emergency_num, gender, birthdate
    }
    const res = await this.api_calls.addEmployee(employee);
    if(res.inserted) {
      Swal.fire("Mensaje", "Empleado registrado. Pin de acceso generado: " + res.pin);
      this.clearInputs();
    } else {
      Swal.fire("Mensaje", "No se pudo registrar el empleado. " + res.msg);
    }
  }

  clearInputs() {
    (<HTMLInputElement>document.getElementById("fullname")).value = "";
    (<HTMLInputElement>document.getElementById("id_card")).value = "";
    (<HTMLInputElement>document.getElementById("phone_num")).value = "";
    (<HTMLInputElement>document.getElementById("emergency_num")).value = "";
    (<HTMLInputElement>document.getElementById("gender")).value = "";
    (<HTMLInputElement>document.getElementById("birthdate")).value = "";
  }
}
