import { Component, OnInit } from '@angular/core';
import { Methods } from 'src/app/classes/methods';
import Swal from 'sweetalert2';
import { ApiCalls } from 'src/app/classes/api-calls';

@Component({
  selector: 'app-assing-boxes',
  templateUrl: './assing-boxes.component.html',
  styleUrls: ['./assing-boxes.component.css']
})
export class AssingBoxesComponent implements OnInit {

  public methods: Methods;
  private api_calls: ApiCalls;
  public date: string;
  public workers: Array<any>;
  private search: string;

  constructor() {
    this.methods = new Methods();
    this.date = this.methods.getDate();
    this.search = "";
    this.api_calls = new ApiCalls();
    this.workers = [
      {
        "pin": "5555",
        "id_card": "207870724",
        "fullname": "Ronald Herrera Gámez",
        "total": 2.31,
        "display": true,
        "isPresent": true,
        "assigned": true
      }
    ];
  }

  async ngOnInit() {
    const EMPLOYEES: any = await this.api_calls.getEmployees();
  }

  public asignBoxes(worker: any) {
    console.log(worker)
    Swal.fire({
      title: `<span>${worker.id_card} - ${worker.fullname}</span>`,
      html:
        `
        <div class="card shadow" style="text-align: center;">
          <h4>cant. cajuelas a asignar</h4>
          <div class="popup">
            <button onclick="${this.plus(worker)}">-</button>
            <input id="inp_boxes_2" value=${worker.total} type="number">
            <button (click)="${this.plus(worker)}">+</button>
          </div>
        </div>
        `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      allowOutsideClick: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Guardar',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down">No trabajó</i>',
      cancelButtonAriaLabel: 'Thumbs down',
      preConfirm: function () {
        console.log((<HTMLInputElement>document.getElementById("inp_boxes_2")).value);
        worker.total = parseFloat((<HTMLInputElement>document.getElementById("inp_boxes_2")).value);
      }
    }).then((result) => {
      var dismiss = String(result.dismiss);
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        worker.isPresent = true;
        worker.assigned = true;
        Swal.fire('Saved!', '', 'success');
      } else if (dismiss == "cancel") {
        worker.isPresent = false;
        worker.assigned = true;
        worker.total = 0;
        Swal.fire('Se asignó a no trabajó!', '', 'info')
      }
    })
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

    for (let worker of this.workers) {
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
    this.workers.map(w => {
      w.display = true;
    });
  }

  public plus(worker: any) {
    worker.total = worker.total + 0.25;
  }

  public minus(worker: any) {
    let total: number = worker.total + 0.25;
    if (total >= 0) {
      worker.total = total;
    }
  }


}
