import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
public alertVar:boolean=false;
  constructor
    (private loginService: LoginService,
      private _route: Router) { }

  logIn = { email: '', pwd: '' }

  loginData = this.loginService.getData();
  login1() {
    let logIn1 = this.loginService.login(this.logIn);
    if (logIn1) {
      this._route.navigateByUrl("dash");
    }else

this.alertVar= true;

    // console.log("logIn -->",this.logIn);   
    // for (let item of this.loginData) {
    //   if ((item.email == this.logIn.email) && (item.pwd == this.logIn.pwd)){
    //     console.log("log IN");
    //     break;
    //   }          
    // }
    // console.log("*************************************");

    // for (let item in this.loginData) {
    //   console.log("i ---- IN",item);      
    //   console.log("i ---- tab",this.loginData[item]);      
    // }
  }

  // login(email: any, pwd: any) {
  //   console.log("email --->", email);
  //   console.log("pwd --->", pwd);
  // }
}
