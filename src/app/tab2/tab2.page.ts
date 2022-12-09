import { Component } from '@angular/core';
import { Produto } from '../models/Produto';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listaProdutos: Produto[] = [];

  constructor(private storageService: StorageService) { }

  async buscarProdutos() {
    this.listaProdutos = await this.storageService.getAll();
  }

  ionViewDidEnter() {
    this.buscarProdutos();
  }

  async excluirCadastro(nome: string) {
    await this.storageService.remove(nome);
    this.buscarProdutos();
  }
}
