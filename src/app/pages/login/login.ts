import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  senha = '';
  lembrar = false;
  mensagem = '';
  tentou = false;

  constructor() {
    this.email = 'karine@pokemart.com';
    this.senha = 'Teste@123';
  }

  entrar(formularioValido: boolean | null) {
    this.tentou = true;

    if (!formularioValido) {
      this.mensagem = 'Preencha os campos corretamente.';
      return;
    }

    localStorage.setItem('usuarioLogado', JSON.stringify({
      nome: 'Karine',
      email: this.email,
      documento: '000.000.000-00',
      telefone: '(11) 90000-0000',
      endereco: 'Rua das Pokébolas, 151, Pallet Town, São Paulo, SP'
    }));

    window.location.href = '/';
  }
}