import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/produto';
import { LISTA_PRODUTOS } from '../../models/lista-produtos';
import { Cesta } from '../../models/cesta';

@Component({
  selector: 'app-destaques',
  imports: [CommonModule],
  templateUrl: './destaques.html',
  styleUrl: './destaques.css',
})
export class Destaques {
  lista: Produto[] = [];
  cesta: Cesta = new Cesta();
  mensagem: string = '';

  constructor() {
    for (let produto of LISTA_PRODUTOS) {
      if (produto.destaque == 1 && this.lista.length < 6) {
        this.lista.push(produto);
      }
    }
  }

  desconto(produto: Produto): number {
    return Math.round((1 - produto.valorPromo / produto.valor) * 100);
  }

  comprar(produto: Produto) {
    this.cesta.adicionar(produto);
    this.mensagem = produto.nome + ' adicionado à cesta!';
  }

  comprarAgora(produto: Produto) {
    this.cesta.adicionar(produto);
    window.location.href = 'carrinho';
  }
}