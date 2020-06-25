import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    Correo: new FormControl(),
    Password: new FormControl()
  });

  constructor(
    private router : Router,
  ) { }

  ngOnInit() {
  }

  onClickSubmit() {
    this.router.navigate(["/home"])
    console.log(this.router)
  }
}
