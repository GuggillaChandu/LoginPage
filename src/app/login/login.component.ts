import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'LoginProject';

  EmailId:string='';
  Password:string='';

  login()
  {
    console.log('EmailId',this.EmailId);
    console.log('Password',this.Password);
  }



}
