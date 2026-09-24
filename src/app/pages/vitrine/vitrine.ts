import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../models/produto';
import { LISTA_PRODUTOS } from '../../models/lista-produtos';
import { Cesta } from '../../models/cesta';

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine {
  lista: Produto[] = [];
  categoria: string = '';
  busca: string = '';
  categorias: string[] = ['Poções e Saúde', 'Equipamentos', 'Pokébolas', 'Acessórios', 'Alimentos', 'EvolutionStone', 'Ofertas'];
  cesta: Cesta = new Cesta();
  mensagem: string = '';

  constructor(private route: ActivatedRoute) {
    this.categoria = this.route.snapshot.queryParams['categoria'] || '';
    this.busca = this.route.snapshot.queryParams['busca'] || '';

    for (let produto of LISTA_PRODUTOS) {
      let passaCategoria = this.categoria == ''
        || produto.categoria == this.categoria
        || (this.categoria == 'Ofertas' && produto.destaque == 1);

      let passaBusca = produto.nome.toLowerCase().includes(this.busca.toLowerCase());

      if (passaCategoria && passaBusca) {
        this.lista.push(produto);
      }
    }
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