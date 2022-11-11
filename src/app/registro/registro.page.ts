import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  mostrarSenha = false;
  mostrarConfirmarSenha = false;
  iconeSenha = 'eye';
  iconeConfirmarSenha = 'eye';

  constructor() { }

  ngOnInit() {
  }

  alterarVisualizacaoSenha() {
    this.mostrarSenha = !this.mostrarSenha;
    if (this.iconeSenha === 'eye') {
      this.iconeSenha = 'eye-off';
    } else {
      this.iconeSenha = 'eye';
    }
  }

  alterarVisualizacaoConfirmarSenha() {
    this.mostrarConfirmarSenha = !this.mostrarConfirmarSenha;
    if (this.iconeConfirmarSenha === 'eye') {
      this.iconeConfirmarSenha = 'eye-off';
    } else {
      this.iconeConfirmarSenha = 'eye';
    }
  }
}
