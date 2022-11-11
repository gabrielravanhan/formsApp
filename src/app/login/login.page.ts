import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mostrarSenha = false;
  iconeSenha = 'eye';

  constructor() { }

  ngOnInit() {
  }

  alterarVisualizacao() {
    this.mostrarSenha = !this.mostrarSenha;
    if (this.iconeSenha === 'eye') {
      this.iconeSenha = 'eye-off';
    } else {
      this.iconeSenha = 'eye';
    }
  }
}
