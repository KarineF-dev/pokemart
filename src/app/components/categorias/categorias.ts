import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  imports: [],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css',
})
export class Categorias {
  lista = [
    { nome: 'Poções e Saúde', desc: 'Cure, recupere, vença!', img: 'imagens/categorias/pocoes.jpg', cor: '#e6f2fd', borda: '#3d8fd6' },
    { nome: 'Pokébolas', desc: 'Capture o seu destino!', img: 'imagens/categorias/pokebolas.jpg', cor: '#fdeaea', borda: '#e3262f' },
    { nome: 'Equipamentos', desc: 'Mais preparo, mais chances!', img: 'imagens/categorias/equipamentos.jpg', cor: '#fdf0e3', borda: '#ef7d2e' },
    { nome: 'EvolutionStone', desc: 'Desperte o potencial!', img: 'imagens/categorias/evolution.jpg', cor: '#fdf7dd', borda: '#e0a800' },
    { nome: 'Alimentos', desc: 'Energia para o seu time!', img: 'imagens/categorias/alimentos.jpg', cor: '#e9f7e6', borda: '#4caf50' },
    { nome: 'Acessórios', desc: 'Estilo de treinador!', img: 'imagens/categorias/acessorios.jpg', cor: '#f7eafd', borda: '#9c5bd1' },
  ];
}