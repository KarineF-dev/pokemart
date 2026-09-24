import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recuperar-senha',
  imports: [FormsModule],
  templateUrl: './recuperar-senha.html',
  styleUrl: './recuperar-senha.css',
})
export class RecuperarSenha {
  email = '';
  mensagem = '';
  tentou = false;
  enviado = false;

  enviar(formularioValido: boolean | null) {
    this.tentou = true;

    if (!formularioValido) {
      this.mensagem = 'Informe um e-mail válido.';
      return;
    }

    this.mensagem = '';
    this.enviado = true;
  }
}