import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  formRegistro: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' }
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
      { tipo: 'invalido', mensagem: 'CPF Inválido.' }
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' }
    ],
    senha: [
      { tipo: 'required', mensagem: 'A senha é obrigatória.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' }
    ],
    confirmaSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' }
    ]
  };

  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
      confirmaSenha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])]
    });
  }

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
