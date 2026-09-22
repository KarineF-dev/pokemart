import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  categorias = ['Poções e Saúde', 'Equipamentos', 'Pokébolas', 'Acessórios', 'Alimentos', 'EvolutionStone', 'Ofertas'];

  naHome(): boolean {
    return window.location.pathname == '/';
  }

  categoriaAtual(): string {
    let params = new URLSearchParams(window.location.search);
    return params.get('categoria') || '';
  }
    buscaAtual(): string {
    let params = new URLSearchParams(window.location.search);
    return params.get('busca') || '';
  }
}