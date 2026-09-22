import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  ano = new Date().getFullYear();
  categorias = ['Poções e Saúde', 'Pokébolas', 'Equipamentos', 'EvolutionStone', 'Acessórios'];
  atendimento = ['Fale Conosco', 'Trocas e Devoluções', 'Perguntas Frequentes', 'Política de Privacidade'];
  redes = ['bi-instagram', 'bi-twitter-x', 'bi-tiktok', 'bi-youtube', 'bi-discord'];
}