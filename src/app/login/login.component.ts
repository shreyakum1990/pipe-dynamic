import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private user : any = {};
  constructor(private route : Router) { }

  ngOnInit() {
  }

  checklogin(){
    if(this.user.email == "shreya@gmail.com" && this.user.password == "123456"){
      console.log("coreect login");
      this.route.navigate(['/about']);
    }
    else{
      console.log("incorrect login")
    }
  }
}
