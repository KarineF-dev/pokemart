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

  entrar(formularioValido: boolean | null) {
    this.tentou = true;

    if (!formularioValido) {
      this.mensagem = 'Preencha os campos corretamente.';
      return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email == this.email && usuarios[i].senha == this.senha) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarios[i]));
        alert('Bem-vindo, ' + usuarios[i].nome + '!');
        window.location.href = '/';
        return;
      }
    }

    this.mensagem = 'E-mail ou senha incorretos.';
  }
}