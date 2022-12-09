import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/Usuario';
import { StorageService } from './../services/storage.service';
import { Router } from '@angular/router';

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
  usuario: Usuario = new Usuario();

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' }
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' }
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

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
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

  async salvarRegistro() {
    if (this.formRegistro.valid) {
      this.usuario.nome = this.formRegistro.value.nome;
      this.usuario.cpf = this.formRegistro.value.cpf;
      this.usuario.email = this.formRegistro.value.email;
      this.usuario.senha = this.formRegistro.value.senha;
      await this.storageService.set(this.usuario.email, this.usuario);
      this.route.navigateByUrl('/tabs');
    } else {
      alert('Formulário Inválido');
    }
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
