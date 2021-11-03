import { Component, OnInit } from '@angular/core';
import { Methods } from '../../classes/methods';

@Component({
  selector: 'app-employees-component',
  templateUrl: './employees-component.component.html',
  styleUrls: ['./employees-component.component.css']
})
export class EmployeesComponentComponent implements OnInit {

  public date: string;
  public employee_list: Array<any>;
  public methods: Methods = new Methods();

  constructor() {
    this.date = this.methods.getDate();
    this.employee_list = [
      {
        "id_card": "207870724", "name": "Ronald Herrera", "display": true
      },
      {
        "id_card": "207870724", "name": "Ronald Herrera", "display": true
      },
      {
        "id_card": "207870724", "name": "Ronald Herrera", "display": true
      },
      {
        "id_card": "207870724", "name": "Ronald Herrera", "display": false
      }
    ];
  }

  ngOnInit(): void {
    console.log(this.methods.getDate());
  }

  clickOnEmployee(employee: any) {
    console.log(employee);

  }

  public filter() {
    const value = (<HTMLInputElement>document.getElementById("input_search")).value
    console.log(value);

  }
}
