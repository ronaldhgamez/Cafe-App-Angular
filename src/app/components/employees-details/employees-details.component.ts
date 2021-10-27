import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {

  public name: string;
  public id_generated: string;
  public card_id: string;
  public tel: string;
  public emergency: string;
  public age: Number;

  public isEditing: boolean;
  

  constructor() {
    this.name = "Ronald Herrera Gámez";
    this.id_generated = "T102522";
    this.card_id = "2017870724";
    this.tel = "60102556";
    this.emergency = "2014588600";
    this.age = 34;
    this.isEditing = false;
   }

  ngOnInit(): void {
  }

  saveNewValues() {
    const name = (<HTMLInputElement>document.getElementById("name")).value;
    const card_id = (<HTMLInputElement>document.getElementById("card_id")).value;
    const tel = (<HTMLInputElement>document.getElementById("tel")).value;
    const emergency = (<HTMLInputElement>document.getElementById("emergency")).value;
    const age = (<HTMLInputElement>document.getElementById("age")).value;

    const x = {
      name, card_id, tel, emergency, age
    }
    console.log(x);
  }

}
