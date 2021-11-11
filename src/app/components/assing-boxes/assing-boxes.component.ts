import { Component, OnInit } from '@angular/core';
import { Methods } from 'src/app/classes/methods';
import Swal from 'sweetalert2';
import { ApiCalls } from 'src/app/classes/api-calls';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assing-boxes',
  templateUrl: './assing-boxes.component.html',
  styleUrls: ['./assing-boxes.component.css']
})
export class AssingBoxesComponent implements OnInit {

  public methods: Methods;
  private api_calls: ApiCalls;

  public dateString: string; // Monday, 12
  public today: string;
  public selectedDate: string;

  public workers: Array<any>;
  private search: string;

  constructor(private router: Router) {
    this.methods = new Methods();
    this.api_calls = new ApiCalls();
    this.dateString = this.methods.getDate();
    this.today = this.methods.getDate2();
    this.selectedDate = this.today;
    this.search = "";
    this.workers = [];
  }

  async ngOnInit() {
    this.today = this.methods.getDate2();
    this.showDailyData(this.today);
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
        worker.total = parseFloat((<HTMLInputElement>document.getElementById("inp_boxes_2")).value);
      }
    }).then((result) => {
      var dismiss = String(result.dismiss);
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        (async () => {
          const assigned = await this.api_calls.assignTotalBoxes(this.selectedDate, worker.pin, worker.total)
          if (assigned) {
            worker.isPresent = true;
            worker.assigned = true;
            Swal.fire('Se asignaron las cajuelas correctamente!', '', 'info')
          } else
            Swal.fire('Intente nuevamente', '', 'info');
        })();

      } else if (dismiss == "cancel") {
        (async () => {
          const assigned = await this.api_calls.assignToDidNotWork(this.selectedDate, worker.pin)
          if (assigned) {
            worker.isPresent = false;
            worker.total = 0;
            worker.assigned = true;
            Swal.fire('Se asignó a no trabajó!', '', 'info')
          } else
            Swal.fire('Intente nuevamente', '', 'info')
        })();
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

  async showDailyData(date: string) {
    this.workers = [];
    console.log(date);
    await this.api_calls.createDailyCollections(date);
    const DATA = await this.api_calls.getDailyAssignments(date);
    DATA.map((emp: any) => { emp.display = true });
    this.workers = DATA;
  }

  changeDate() {
    const selectedD = (<HTMLInputElement>document.getElementById("datee")).value;
    const today = new Date(this.today);
    const selected = new Date(selectedD);

    if (today < selected) {
      (<HTMLInputElement>document.getElementById("datee")).value = this.today;
      Swal.fire("Solo puede seleccionar la fecha actual o atrás de esta", '', 'info')
    } else {
      this.selectedDate = selectedD;
      this.showDailyData(this.selectedDate);
    }
  }

  restartFilter() {
    this.search = "";
    (<HTMLInputElement>document.getElementById("search_input")).value = "";
    this.displayAllWorkers();
  }

  back() {
    this.router.navigateByUrl('/employees')
  }

  private displayAllWorkers() {
    this.workers.map(w => {
      w.display = true;
    });
  }

  public plus(worker: any) {
    /* worker.total = worker.total + 0.25; */
  }

  public minus(worker: any) {
    /* let total: number = worker.total + 0.25;
    if (total >= 0) {
      worker.total = total;
    } */
  }

}
