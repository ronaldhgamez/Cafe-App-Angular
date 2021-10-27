import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

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
  }
}
