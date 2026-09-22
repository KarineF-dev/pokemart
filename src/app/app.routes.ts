import { ResultaBusca } from './pages/resulta-busca/resulta-busca';
import { Detalhe } from './pages/detalhe/detalhe';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Vitrine } from './pages/vitrine/vitrine';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Carrinho } from './pages/carrinho/carrinho';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'vitrine', component: Vitrine },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'carrinho', component: Carrinho },
  { path: 'detalhe/:codigo', component: Detalhe },
  { path: 'resultado-busca', component: ResultaBusca },
  { path: '**', redirectTo: '' },
];