import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  formCadastro: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' }
    ],
    descricao: [
      { tipo: 'required', mensagem: 'A descrição é obrigatória.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 5 caracteres.' }
    ],
    validade: [
      { tipo: 'required', mensagem: 'A validade é obrigatória.' }
    ],
    preco: [
      { tipo: 'required', mensagem: 'O preço é obrigatório.' }
    ]
  };

  constructor(private formBuilder: FormBuilder) {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      validade: ['', Validators.compose([Validators.required])],
      preco: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

}
