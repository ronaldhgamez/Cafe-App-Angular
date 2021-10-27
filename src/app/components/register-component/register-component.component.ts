import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {

  miFormulario: FormGroup = this.fb.group({
    cedula: ['', [Validators.required]],
    edad: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    telefonoEmergencia: ['', [Validators.required]],
    fechaIngreso: ['', [Validators.required]],
    genero: ['', [Validators.required]]

  });

  constructor(private fb: FormBuilder) { }

  registro() {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }




/* 
  constructor() { }

  ngOnInit(): void {
  }

  saveEmployee() {
    const name = (<HTMLInputElement>document.getElementById("name")).value;
    const card_id = (<HTMLInputElement>document.getElementById("card_id")).value;
    const tel = (<HTMLInputElement>document.getElementById("tel")).value;
    const emergency = (<HTMLInputElement>document.getElementById("emergency")).value;
    const age = (<HTMLInputElement>document.getElementById("age")).value;

    const employee = {
      name, card_id, tel, emergency, age
    }
    console.log(employee);
  } */
}
