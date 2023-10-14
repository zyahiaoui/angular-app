import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  addUser={email:'',pwd:'',role:''}
  constructor(private registreService:LoginService){}
  // loginData= [
  //   {email:'admin@gmail.com',pwd:'admin',role:'ADMIN'},
  //   {email:'user@gmail.com',pwd:'user',role:'USER'},
  //   {email:'seif@gmail.com',pwd:'seif',role:'ADMIN'},
  //   {email:'test@gmail.com',pwd:'test',role:'USER'},
  //  ]
  loginData= this.registreService.getData();
  save () {
    console.log("addUser --->",this.addUser);
    // this.loginData.push(this.addUser);
    this.registreService.addUser(this.addUser);
    console.log("this.loginData -->",this.loginData);
    
  }
}
