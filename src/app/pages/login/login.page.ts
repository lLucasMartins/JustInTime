import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HelperService } from '../../services/helper.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = null;
  password = null;

  constructor(
    private helper: HelperService,
    private authentication: AuthenticationService) { }

  validLogin(f: NgForm) {
    if (f.valid) {
      this.authentication.loginUser(this.email, this.password);
    } else {
      this.helper.presentAlert('Favor inserir o E-mail e a Senha');
    }
  }

  ngOnInit() {
  }

}
