import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../../models/cesta';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  categorias = ['Poções e Saúde', 'Equipamentos', 'Pokébolas', 'Acessórios', 'Alimentos', 'EvolutionStone', 'Ofertas'];
  usuario: any = null;
  cesta: Cesta = new Cesta();

  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado') || 'null');
  }

  primeiroNome(): string {
    return this.usuario.nome.split(' ')[0];
  }

  sair() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = '/';
  }

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