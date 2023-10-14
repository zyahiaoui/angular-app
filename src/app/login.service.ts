import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginDataService = [
    { id: '1', email: 'admin@gmail.com', pwd: 'admin', role: 'ADMIN' },
    { id: '2', email: 'user@gmail.com', pwd: 'user', role: 'USER' },
    { id: '3', email: 'seif@gmail.com', pwd: 'seif', role: 'ADMIN' },
    { id: '4', email: 'test@gmail.com', pwd: 'test', role: 'USER' },
  ]
  constructor() { }
  private canActiv: boolean = false;

  get canActivLogin() {
    return this.canActiv;
  }

  set canActivLogin(data: any) {
    this.canActiv = data;
  }

  getData() {
    return this.loginDataService;
  }
  login(data: any): boolean {
    for (let item of this.loginDataService) {
      if ((item.email == data.email) && (item.pwd == data.pwd)) {
        this.canActiv = true;
        return true;
      }
    }

    return false;
  }
  addUser(user: any) {
    this.loginDataService.push(user);
  }

  modif(user: any) {
    console.log("user in Service", user);
    for (let item in this.loginDataService) {
      if (user.id == this.loginDataService[item].id)
        this.loginDataService[item] = user;
    }
  }

  supp(user: any) {
    console.log("user in Service", user);
    for (let item in this.loginDataService) {
      if (user.id == this.loginDataService[item].id) {
        this.loginDataService.splice(Number(item), 1);
      }
    }
  }
}
