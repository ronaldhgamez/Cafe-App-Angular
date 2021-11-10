import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // CLI imports router
import { ApiCalls } from 'src/app/classes/api-calls';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {

  public DATA: any;
  public pin: string;
  public isEditing: boolean;
  private api_calls: ApiCalls;

  constructor(private router: ActivatedRoute, private router2: Router) {
    this.pin = this.router.snapshot.paramMap.get('id') || "";
    this.isEditing = false;
    this.api_calls = new ApiCalls();
    this.DATA = {
      "phone_num": "",
      "birthdate": "",
      "gender": "",
      "fullname": "",
      "pin": "",
      "id_card": "",
      "emergency_num": ""
    }
  }

  async ngOnInit() {
    this.DATA = await this.api_calls.getEmployeeData(this.pin);
    (<HTMLInputElement>document.getElementById("fullname")).value = this.DATA.fullname;
    (<HTMLInputElement>document.getElementById("id_card")).value = this.DATA.id_card;
    (<HTMLInputElement>document.getElementById("phone_num")).value = this.DATA.phone_num;
    (<HTMLInputElement>document.getElementById("emergency_num")).value = this.DATA.emergency_num;
    (<HTMLInputElement>document.getElementById("gender")).value = this.DATA.gender;
    (<HTMLInputElement>document.getElementById("birthdate")).value = this.DATA.birthdate;
    console.log(this.DATA)
  }

  async saveNewValues() {
    const fullname = (<HTMLInputElement>document.getElementById("fullname")).value;
    const id_card = (<HTMLInputElement>document.getElementById("id_card")).value;
    const gender = (<HTMLInputElement>document.getElementById("gender")).value;
    const phone_num = (<HTMLInputElement>document.getElementById("phone_num")).value;
    const emergency_num = (<HTMLInputElement>document.getElementById("emergency_num")).value;
    const birthdate = (<HTMLInputElement>document.getElementById("birthdate")).value;

    if(fullname.trim() == "" || phone_num.trim() == "" || gender.trim() == "" || birthdate.trim() == "" ) {
      Swal.fire("Advertencia", "Campos imcompletos");
      return;
    }

    const data = {
      fullname, id_card, phone_num, emergency_num, birthdate, gender
    }
    await this.api_calls.modifyEmployee(this.pin, data);
    Swal.fire("Mensaje", "Empleado modificado correctamente!");
    this.isEditing = false;
  }

  back() {
    this.router2.navigateByUrl('/employees');
  }
}
