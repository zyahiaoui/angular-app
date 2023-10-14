import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
constructor(private _loginService:LoginService,private _route:Router){}
  logOUT() {
    this._route.navigateByUrl('')
    this._loginService.canActivLogin = false;
  }

}
