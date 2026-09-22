import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../models/produto';
import { LISTA_PRODUTOS } from '../../models/lista-produtos';
import { Cesta } from '../../models/cesta';

@Component({
  selector: 'app-resulta-busca',
  imports: [CommonModule],
  templateUrl: './resulta-busca.html',
  styleUrl: './resulta-busca.css',
})
export class ResultaBusca {
  busca: string = '';
  lista: Produto[] = [];
  cesta: Cesta = new Cesta();
  mensagem: string = '';

  constructor(private route: ActivatedRoute) {
    this.busca = this.route.snapshot.queryParams['busca'] || '';

    for (let produto of LISTA_PRODUTOS) {
      if (produto.nome.toLowerCase().includes(this.busca.toLowerCase())) {
        this.lista.push(produto);
      }
    }
  }

  comprar(produto: Produto) {
    this.cesta.adicionar(produto);
    this.mensagem = produto.nome + ' adicionado à cesta!';
  }
}