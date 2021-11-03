import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {
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
  }

  clickOnEmployee(employee: any) {
    console.log(employee);
    this.router.navigateByUrl(`/employees/details/${employee.id_card}`);
  }

  public filter() {
    const value = (<HTMLInputElement>document.getElementById("input_search")).value
    console.log(value);

  }

  public goTo(r: string) {
    this.router.navigateByUrl(r);
  }
}
