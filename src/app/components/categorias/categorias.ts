import { Component } from '@angular/core';

import { item } from '../../sprites';

@Component({
  selector: 'app-categorias',
  imports: [],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css',
})
export class Categorias {
lista = [
  { nome: 'Poções e Saúde', desc: 'Cura, recupera, vença!', img: item('super-potion'), cor: '#eef4ff' },
  { nome: 'Pokébolas', desc: 'Capture o seu destino!', img: item('poke-ball'), cor: '#eaf7ee' },
  { nome: 'Equipamentos', desc: 'Mais preparo, mais chances!', img: item('explorer-kit'), cor: '#fdecef' },
  { nome: 'EvolutionStone', desc: 'Desperte o potencial!', img: item('fire-stone'), cor: '#efedfd' },
  { nome: 'Alimentos', desc: 'Energia para o seu time!', img: item('oran-berry'), cor: '#fff5e3' },
  { nome: 'Acessórios', desc: 'Estilo de treinador!', img: item('silk-scarf'), cor: '#fdeefa' },
];
}