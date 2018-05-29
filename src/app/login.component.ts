import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ServiciosService } from './user.service';

@Component({
  templateUrl: './login.html'
})
export class LoginComponent {
  userName: string;
  pws = '';
  errorMessage = '';

  constructor(public service: ServiciosService, public router: Router) {}

  OnLogin() {
    alert('click');
    this.service.login(this.userName, this.pws).subscribe(
      result => {
        alert('Autentico');
        this.router.navigate(['cliente']);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
