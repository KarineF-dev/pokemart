import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../models/produto';
import { LISTA_PRODUTOS } from '../../models/lista-produtos';
import { Cesta } from '../../models/cesta';

@Component({
  selector: 'app-detalhe',
  imports: [CommonModule, FormsModule],
  templateUrl: './detalhe.html',
  styleUrl: './detalhe.css',
})
export class Detalhe {
  produto: Produto = new Produto();
  encontrado: boolean = false;
  quantidade: number = 1;
  mensagem: string = '';
  cesta: Cesta = new Cesta();

  constructor(private route: ActivatedRoute) {
    let codigo = Number(this.route.snapshot.params['codigo']);

    for (let p of LISTA_PRODUTOS) {
      if (p.codigo == codigo) {
        this.produto = p;
        this.encontrado = true;
      }
    }
  }

  economia(): number {
    return this.produto.valor - this.produto.valorPromo;
  }

  comprar() {
    this.cesta.adicionar(this.produto, this.quantidade);
    this.mensagem = this.quantidade + ' unidade(s) de ' + this.produto.nome + ' adicionada(s) à cesta.';
  }
}