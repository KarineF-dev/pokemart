import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cesta } from '../../models/cesta';

@Component({
  selector: 'app-pedido',
  imports: [CommonModule, FormsModule],
  templateUrl: './pedido.html',
  styleUrl: './pedido.css',
})
export class Pedido {
  cesta: Cesta = new Cesta();
  usuario: any = null;
  pagamento: string = 'pix';
  frete: number = 19.90;
  concluido: boolean = false;
  numeroPedido: number = 0;

   constructor() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado') || 'null');

    if (this.usuario == null) {
      window.location.href = 'login';
    }
  }
  desconto(): number {
    if (this.pagamento == 'pix') {
      return this.cesta.total() * 0.05;
    }
    return 0;
  }

  totalFinal(): number {
    return this.cesta.total() + this.frete - this.desconto();
  }

  confirmar() {
    let pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
    this.numeroPedido = 1000 + pedidos.length + 1;

    let itens: any[] = [];
    for (let item of this.cesta.itens) {
      itens.push({
        codigo: item.produto.codigo,
        nome: item.produto.nome,
        quantidade: item.quantidade,
        valor: item.produto.valorPromo
      });
    }

    pedidos.push({
      numero: this.numeroPedido,
      email: this.usuario.email,
      data: new Date().toLocaleDateString('pt-BR'),
      pagamento: this.pagamento,
      total: this.totalFinal(),
      itens: itens
    });

    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    this.cesta.limpar();
    this.concluido = true;
  }
}