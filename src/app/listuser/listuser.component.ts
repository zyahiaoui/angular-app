import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  public listUser: any;
  public userDetail: any;
  constructor(private useService: LoginService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    // this.testVar="test1111"
    this.listUser = this.useService.getData();
    // console.log("user data", this.useService.getData());
  }
  public modifDetail = {id:'', email: '', pwd: '', role: '' }

  open(content: any, user: any) {
    this.modalService.open(content);
    // console.log("user --->", user);
    this.userDetail = user;
    this.modifDetail.id=user.id
    this.modifDetail.email = user.email;
    this.modifDetail.pwd = user.pwd;
    this.modifDetail.role = user.role;

  }

  modifUser() {
    this.useService.modif(this.modifDetail);
  }
  suppUser() {
    // console.log("userDetail -->",this.userDetail);
    this.useService.supp(this.userDetail);
  }
}
