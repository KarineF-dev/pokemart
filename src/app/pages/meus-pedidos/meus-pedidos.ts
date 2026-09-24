import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meus-pedidos',
  imports: [CommonModule],
  templateUrl: './meus-pedidos.html',
  styleUrl: './meus-pedidos.css',
})
export class MeusPedidos {
  pedidos: any[] = [];
  usuario: any = null;

  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado') || 'null');

    if (this.usuario == null) {
      window.location.href = 'login';
      return;
    }

    let todos = JSON.parse(localStorage.getItem('pedidos') || '[]');

    for (let p of todos) {
      if (p.email == this.usuario.email) {
        this.pedidos.push(p);
      }
    }

    this.pedidos.reverse();
  }

  nomePagamento(tipo: string): string {
    if (tipo == 'pix') return 'Pix';
    if (tipo == 'cartao') return 'Cartão de crédito';
    return 'Boleto bancário';
  }
}