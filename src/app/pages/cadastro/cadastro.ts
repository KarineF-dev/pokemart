import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  nome = '';
  email = '';
  senha = '';
  documento = '';
  telefone = '';
  endereco = '';
  mensagem = '';
  tentou = false;

  cadastrar(formularioValido: boolean | null) {
    this.tentou = true;

    if (!formularioValido) {
      this.mensagem = 'Corrija os campos destacados em vermelho.';
      return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email == this.email) {
        this.mensagem = 'Esse e-mail já está cadastrado.';
        return;
      }
    }

    usuarios.push({
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      documento: this.documento,
      telefone: this.telefone,
      endereco: this.endereco
    });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login';
  }
}