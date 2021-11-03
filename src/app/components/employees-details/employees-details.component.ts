import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // CLI imports router

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {

  public name: string;
  public id: string;
  public card_id: string;
  public tel: string;
  public emergency: string;
  public age: Number;
  public isEditing: boolean;


  constructor(private router: ActivatedRoute, private router2: Router) {

    this.id = this.router.snapshot.paramMap.get('id') || "";
    this.name = "";
    this.card_id = "";
    this.tel = "";
    this.emergency = "";
    this.age = 0;
    this.isEditing = false;
  }

  async ngOnInit() {
    console.log("id: " + this.id)
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

  back() {
    this.router2.navigateByUrl('/employees');
  }
}
