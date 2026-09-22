import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../../models/cesta';

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
  cesta: Cesta = new Cesta();

  finalizar() {
    if (localStorage.getItem('usuarioLogado') == null) {
      alert('Faça login para finalizar o pedido.');
      window.location.href = 'login';
      return;
    }
    alert('Pedido realizado com sucesso! Obrigado por comprar na PokéMart.');
    this.cesta.limpar();
  }
}