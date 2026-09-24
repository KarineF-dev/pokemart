import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    if (usuarios.length == 0) {
      usuarios.push({
        nome: 'Karine',
        email: 'karine@pokemart.com',
        senha: 'Teste@123',
        documento: '000.000.000-00',
        telefone: '(11) 90000-0000',
        endereco: 'Rua das Pokébolas, 151, Pallet Town, São Paulo, SP'
      });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
  }
}
