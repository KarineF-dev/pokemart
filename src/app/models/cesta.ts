import { ItemCesta } from './item-cesta';
import { Produto } from './produto';
import { LISTA_PRODUTOS } from './lista-produtos';

export class Cesta {
  itens: ItemCesta[] = [];

  constructor() {
    this.carregar();
  }

  carregar(): void {
    let salvos = JSON.parse(localStorage.getItem('cesta') || '[]');
    for (let s of salvos) {
      for (let p of LISTA_PRODUTOS) {
        if (p.codigo == s.codigo) {
          let item = new ItemCesta();
          item.produto = p;
          item.quantidade = s.quantidade;
          this.itens.push(item);
        }
      }
    }
  }

  salvar(): void {
    let dados: any[] = [];
    for (let item of this.itens) {
      dados.push({ codigo: item.produto.codigo, quantidade: item.quantidade });
    }
    localStorage.setItem('cesta', JSON.stringify(dados));
  }

  adicionar(produto: Produto, quantidade: number = 1): void {
    const existente = this.itens.find(i => i.produto.codigo === produto.codigo);

    if (existente) {
      existente.quantidade = existente.quantidade + quantidade;
    } else {
      const novo = new ItemCesta();
      novo.produto = produto;
      novo.quantidade = quantidade;
      this.itens.push(novo);
    }
    this.salvar();
  }

  aumentar(item: ItemCesta): void {
    item.quantidade++;
    this.salvar();
  }

  diminuir(item: ItemCesta): void {
    if (item.quantidade > 1) {
      item.quantidade--;
      this.salvar();
    } else {
      this.remover(item);
    }
  }

  remover(item: ItemCesta): void {
    const indice = this.itens.indexOf(item);
    if (indice > -1) {
      this.itens.splice(indice, 1);
    }
    this.salvar();
  }

  limpar(): void {
    this.itens = [];
    this.salvar();
  }

  subtotal(item: ItemCesta): number {
    return item.produto.valorPromo * item.quantidade;
  }

  total(): number {
    return this.itens.reduce((soma, item) => soma + this.subtotal(item), 0);
  }

  quantidadeTotal(): number {
    return this.itens.reduce((soma, item) => soma + item.quantidade, 0);
  }

  vazia(): boolean {
    return this.itens.length === 0;
  }
}