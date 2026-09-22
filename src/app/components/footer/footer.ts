import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  ano = new Date().getFullYear();
  categorias = ['Poções&Saúde', 'Pokébolas', 'Equipamentos', 'EvolutionStone', 'Acessórios'];
  atendimento = ['Fale Conosco', 'Trocas e Devoluções', 'Perguntas Frequentes', 'Política de Privacidade'];
  redes = ['bi-instagram', 'bi-twitter-x', 'bi-tiktok', 'bi-youtube', 'bi-discord'];
}