import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // CLI imports router

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


  constructor(private router: ActivatedRoute) {

    this.id = this.router.snapshot.paramMap.get('id') || "";
    this.router.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      console.log(paramMap);
    })
    this.name = "Ronald Herrera Gámez";
    
    this.card_id = "2017870724";
    this.tel = "60102556";
    this.emergency = "2014588600";
    this.age = 34;
    this.isEditing = false;
  }

  ngOnInit(): void {
    console.log(this.id + "dfa")
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
