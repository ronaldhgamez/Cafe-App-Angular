import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Methods } from '../../classes/methods';
import { ApiCalls } from 'src/app/classes/api-calls';

@Component({
  selector: 'app-employees-component',
  templateUrl: './employees-component.component.html',
  styleUrls: ['./employees-component.component.css']
})
export class EmployeesComponentComponent implements OnInit {

  public date: string;
  public employee_list: Array<any>;
  public methods: Methods = new Methods();
  public search: string;
  private api_calls: ApiCalls;

  constructor(private router: Router) {
    this.date = this.methods.getDate();
    this.search = "";
    this.employee_list = [];
    this.api_calls = new ApiCalls();
  }

  async ngOnInit() {
    const EMPLOYEES: any = await this.api_calls.getEmployees();
    EMPLOYEES.map((emp: any) => {
      emp.display = true;
    });
    this.employee_list = EMPLOYEES;
  }

  clickOnEmployee(employee: any) {
    console.log(employee);
    this.router.navigateByUrl(`/employees/details/${employee.pin}`);
  }

  filter() {
    this.search = (<HTMLInputElement>document.getElementById("search_input")).value.trim();

    // DISPLAY ALL ELEMENTS WHEN THERE IS NO FILTER
    if (this.search === '') {
      this.displayAllWorkers();
      return;
    }

    this.search = this.search.toLowerCase();
    this.search = this.methods.quitarAcentos(this.search);

    var worlds_array = this.search.split(" ");

    for (let worker of this.employee_list) {
      let worker_name = this.methods.quitarAcentos(worker.fullname.trim().toLowerCase());
      let worker_id = worker.id_card.trim();

      // check if the string contains the id card or the name
      var isEvery = worlds_array.every(w => worker_name.includes(w));
      var isEvery2 = worlds_array.every(w => worker_id.includes(w));
      worker.display = (isEvery || isEvery2) ? true : false;
    }
  }

  restartFilter() {
    this.search = "";
    (<HTMLInputElement>document.getElementById("search_input")).value = "";
    this.displayAllWorkers();
  }

  private displayAllWorkers() {
    this.employee_list.map(w => {
      w.display = true;
    });
  }


  public goTo(r: string) {
    this.router.navigateByUrl(r);
  }
}
