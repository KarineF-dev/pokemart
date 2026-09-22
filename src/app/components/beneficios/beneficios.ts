import { Component } from '@angular/core';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.html',
  styleUrl: './beneficios.css',
})
export class Beneficios {
  itens = [
    { icone: 'bi-truck', titulo: 'Envio Rápido', texto: 'Para todo o Brasil!' },
    { icone: 'bi-shield-check', titulo: 'Compra Segura', texto: 'Seus dados protegidos' },
    { icone: 'bi-credit-card', titulo: 'Formas de Pagamento', texto: 'Pix, cartão e boleto' },
    { icone: 'bi-box-seam', titulo: 'Acompanhe seu Pedido', texto: 'Do clique à entrega' },
  ];
}