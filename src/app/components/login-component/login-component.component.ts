import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  public username: string;
  public password: string;

  constructor() {
    this.username = "";
    this.password = "";
  }

  ngOnInit(): void {
  }

  validateCredentials() {
    this.username = (<HTMLInputElement>document.getElementById("username")).value;
    this.password = (<HTMLInputElement>document.getElementById("password")).value;

    if (this.username === "admin" && this.password === "pass") {
      alert("Welcome admin!");
    } else {
      alert("Incorrect credentials");
    }
  }

}
