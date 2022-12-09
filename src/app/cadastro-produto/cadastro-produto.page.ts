import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../models/Produto';
import { StorageService } from './../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  formCadastro: FormGroup;
  produto: Produto = new Produto();

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O nome do produto é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome do produto deve ter pelo menos 3 caracteres.' }
    ],
    descricao: [
      { tipo: 'required', mensagem: 'A descrição é obrigatória.' },
      { tipo: 'minlength', mensagem: 'A descrição deve ter pelo menos 5 caracteres.' }
    ],
    validade: [
      { tipo: 'required', mensagem: 'A validade é obrigatória.' }
    ],
    preco: [
      { tipo: 'required', mensagem: 'O preço é obrigatório.' }
    ]
  };

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      validade: ['', Validators.compose([Validators.required])],
      preco: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  async salvarCadastro() {
    if (this.formCadastro.valid) {
      this.produto.nome = this.formCadastro.value.nome;
      this.produto.descricao = this.formCadastro.value.descricao;
      this.produto.validade = this.formCadastro.value.validade;
      this.produto.preco = this.formCadastro.value.preco;
      await this.storageService.set(this.produto.nome, this.produto);
      this.route.navigateByUrl('/tabs');
    } else {
      alert('Formulário Inválido');
    }
  }
}
