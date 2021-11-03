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
  public search: string;

  constructor(private router: Router) {
    this.date = this.methods.getDate();
    this.search = "";
    this.employee_list = [
      {
        "id_card": "207870712", "name": "Jose Herrera", "display": true
      },
      {
        "id_card": "207870723", "name": "Luz Herrera", "display": true
      },
      {
        "id_card": "207870734", "name": "Alicia Gámez", "display": true
      },
      {
        "id_card": "207870745", "name": "Maria Herrera", "display": true
      }
    ];
  }

  ngOnInit(): void {
  }

  clickOnEmployee(employee: any) {
    console.log(employee);
    this.router.navigateByUrl(`/employees/details/${employee.id_card}`);
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
      let worker_name = this.methods.quitarAcentos(worker.name.trim().toLowerCase());
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
