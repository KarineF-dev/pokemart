import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { item } from '../../sprites';

@Component({
  selector: 'app-banners-promo',
  imports: [RouterLink],
  templateUrl: './banners-promo.html',
  styleUrl: './banners-promo.css',
})
export class BannersPromo {
  banners = [
    {
      titulo: 'Poções',
      categoria: 'Poções e Saúde',
      sub: 'Recarregue as energias do seu time!',
      texto: 'Poções de cura, reviver, status e muito mais. Sua equipe sempre pronta para a próxima batalha!',
      imgs: [item('potion'), item('super-potion'), item('max-potion')],
      fundo: 'linear-gradient(120deg, #1c2130 45%, #3b2a5c)',
    },
    {
      titulo: 'Pokébolas',
      categoria: 'Pokébolas',
      sub: 'Mais do que uma captura, é um laço!',
      texto: 'Do modelo clássico à Ultra Bola, encontre a pokébola ideal para cada situação.',
      imgs: [item('poke-ball'), item('great-ball'), item('ultra-ball')],
      fundo: 'linear-gradient(120deg, #3a0d12 40%, #8e1a22)',
    },
  ];
}