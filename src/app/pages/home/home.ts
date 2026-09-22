import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Categorias } from '../../components/categorias/categorias';
import { Destaques } from '../../components/destaques/destaques';
import { Beneficios } from '../../components/beneficios/beneficios';

@Component({
  selector: 'app-home',
  imports: [Hero, Categorias, Destaques, Beneficios],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}