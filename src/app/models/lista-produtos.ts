import { Produto } from './produto';

export const LISTA_PRODUTOS: Produto[] = [
  // ===== Poções e Saúde =====
  { codigo: 1, nome: 'Poção', descritivo: 'Recupera 20 HP de um Pokémon. Essencial em qualquer mochila.', categoria: '', valor: 9.90, valorPromo: 7.90, quantidade: 80, destaque: 1 },
  { codigo: 2, nome: 'Super Poção', descritivo: 'Recupera 60 HP. Ideal para batalhas mais longas.', categoria: 'Poções e Saúde', valor: 17.90, valorPromo: 14.90, quantidade: 60, destaque: 0 },
  { codigo: 3, nome: 'Hiper Poção', descritivo: 'Recupera 120 HP de um Pokémon de uma só vez.', categoria: 'Poções e Saúde', valor: 29.90, valorPromo: 24.90, quantidade: 40, destaque: 0 },
  { codigo: 4, nome: 'Poção Máxima', descritivo: 'Restaura todo o HP de um Pokémon.', categoria: 'Poções e Saúde', valor: 44.90, valorPromo: 39.90, quantidade: 25, destaque: 1 },
  { codigo: 6, nome: 'Acordar', descritivo: 'Desperta na hora um Pokémon que caiu no sono.', categoria: 'Poções e Saúde', valor: 8.90, valorPromo: 6.90, quantidade: 90, destaque: 0 },
  { codigo: 7, nome: 'Ice Heal', descritivo: 'Descongela um Pokémon que ficou congelado.', categoria: 'Poções e Saúde', valor: 8.90, valorPromo: 6.90, quantidade: 90, destaque: 0 },
  { codigo: 8, nome: 'Antídoto', descritivo: 'Cura um Pokémon envenenado.', categoria: 'Poções e Saúde', valor: 7.90, valorPromo: 5.90, quantidade: 100, destaque: 0 },
  { codigo: 9, nome: 'Anti-Paralisia', descritivo: 'Cura um Pokémon paralisado.', categoria: 'Poções e Saúde', valor: 7.90, valorPromo: 5.90, quantidade: 0, destaque: 0 },
  { codigo: 5, nome: 'Cura Total', descritivo: 'Cura qualquer problema de status: veneno, sono, paralisia, queimadura e congelamento.', categoria: 'Poções e Saúde', valor: 19.90, valorPromo: 16.90, quantidade: 45, destaque: 1 },
  { codigo: 11, nome: 'Antiqueimadura', descritivo: 'Cura um Pokémon que sofreu queimadura.', categoria: 'Poções e Saúde', valor: 7.90, valorPromo: 5.90, quantidade: 90, destaque: 0 },

  // ===== Pokébolas =====
    // ===== Pokébolas =====
  { codigo: 12, nome: 'Poké Bola', descritivo: 'A clássica. Perfeita para começar a sua coleção.', categoria: 'Pokébolas', valor: 29.90, valorPromo: 24.90, quantidade: 200, destaque: 0 },
  { codigo: 13, nome: 'Great Ball', descritivo: 'Taxa de captura maior que a Poké Bola comum.', categoria: 'Pokébolas', valor: 69.90, valorPromo: 59.90, quantidade: 120, destaque: 0 },
  { codigo: 14, nome: 'Ultra Ball', descritivo: 'A melhor bola vendida em lojas. Alta taxa de captura para Pokémon difíceis.', categoria: 'Pokébolas', valor: 149.90, valorPromo: 129.90, quantidade: 60, destaque: 1 },
  { codigo: 15, nome: 'Master Ball', descritivo: 'Captura qualquer Pokémon selvagem, sem falhar. Raríssima, produzida em quantidade limitada.', categoria: 'Pokébolas', valor: 4999.90, valorPromo: 4499.90, quantidade: 0, destaque: 1 },
  { codigo: 16, nome: 'Premier Ball', descritivo: 'Edição comemorativa, com o mesmo desempenho da Poké Bola.', categoria: 'Pokébolas', valor: 34.90, valorPromo: 29.90, quantidade: 60, destaque: 0 },
  { codigo: 17, nome: 'Luxury Ball', descritivo: 'Bola de luxo e confortável que faz o Pokémon ficar amigo mais rápido.', categoria: 'Pokébolas', valor: 299.90, valorPromo: 269.90, quantidade: 15, destaque: 0 },
  { codigo: 18, nome: 'Quick Ball', descritivo: 'Muito eficaz quando usada logo no início da batalha.', categoria: 'Pokébolas', valor: 119.90, valorPromo: 99.90, quantidade: 40, destaque: 1 },
  { codigo: 19, nome: 'Dusk Ball', descritivo: 'Funciona melhor à noite e em cavernas.', categoria: 'Pokébolas', valor: 99.90, valorPromo: 89.90, quantidade: 40, destaque: 0 },
  { codigo: 20, nome: 'Net Ball', descritivo: 'Mais eficaz em Pokémon dos tipos Água e Inseto.', categoria: 'Pokébolas', valor: 99.90, valorPromo: 89.90, quantidade: 45, destaque: 0 },
  { codigo: 21, nome: 'Heal Ball', descritivo: 'Restaura o HP e o status do Pokémon assim que ele é capturado.', categoria: 'Pokébolas', valor: 44.90, valorPromo: 39.90, quantidade: 55, destaque: 0 },

  // ===== Equipamentos =====
  { codigo: 22, nome: 'Mochila de Treinador', descritivo: 'Espaço para itens, pokébolas e tudo que a jornada pedir.', categoria: 'Equipamentos', valor: 119.90, valorPromo: 99.90, quantidade: 20, destaque: 1 },
  { codigo: 23, nome: 'Bicicleta', descritivo: 'Dobrável e resistente. Chegue mais rápido ao próximo ginásio.', categoria: 'Equipamentos', valor: 299.90, valorPromo: 259.90, quantidade: 5, destaque: 0 },
  { codigo: 24, nome: 'Vara Velha', descritivo: 'Vara de pesca simples para fisgar Pokémon aquáticos.', categoria: 'Equipamentos', valor: 29.90, valorPromo: 24.90, quantidade: 40, destaque: 0 },
  { codigo: 25, nome: 'Vara Boa', descritivo: 'Vara de pesca melhor, que alcança Pokémon mais fortes.', categoria: 'Equipamentos', valor: 59.90, valorPromo: 49.90, quantidade: 20, destaque: 0 },
  { codigo: 26, nome: 'Super Vara', descritivo: 'A melhor vara de pesca para Pokémon raros.', categoria: 'Equipamentos', valor: 99.90, valorPromo: 89.90, quantidade: 8, destaque: 1 },
  { codigo: 27, nome: 'Repelente', descritivo: 'Afasta Pokémon selvagens fracos por 100 passos.', categoria: 'Equipamentos', valor: 9.90, valorPromo: 7.90, quantidade: 150, destaque: 0 },
  { codigo: 28, nome: 'Super Repelente', descritivo: 'Afasta Pokémon selvagens fracos por 200 passos.', categoria: 'Equipamentos', valor: 14.90, valorPromo: 12.90, quantidade: 100, destaque: 0 },
  { codigo: 29, nome: 'Repelente Máximo', descritivo: 'Afasta Pokémon selvagens fracos por 250 passos.', categoria: 'Equipamentos', valor: 19.90, valorPromo: 16.90, quantidade: 80, destaque: 0 },
  { codigo: 30, nome: 'Corda de Fuga', descritivo: 'Tira você de cavernas e labirintos em um instante.', categoria: 'Equipamentos', valor: 12.90, valorPromo: 9.90, quantidade: 70, destaque: 0 },
  { codigo: 31, nome: 'Pokédex', descritivo: 'Enciclopédia digital que registra cada Pokémon encontrado.', categoria: 'Equipamentos', valor: 199.90, valorPromo: 179.90, quantidade: 10, destaque: 1 },

  // ===== Acessórios =====
  { codigo: 32, nome: 'Boné de Treinador', descritivo: 'O acessório clássico de todo treinador.', categoria: 'Acessórios', valor: 49.90, valorPromo: 39.90, quantidade: 40, destaque: 0 },
  { codigo: 33, nome: 'Restos', descritivo: 'Recupera um pouco de HP do Pokémon a cada turno.', categoria: 'Acessórios', valor: 39.90, valorPromo: 34.90, quantidade: 25, destaque: 1 },
  { codigo: 34, nome: 'Faixa de Foco', descritivo: 'Garante que o Pokémon aguente um golpe que o derrubaria.', categoria: 'Acessórios', valor: 44.90, valorPromo: 39.90, quantidade: 20, destaque: 0 },
  { codigo: 35, nome: 'Lenço de Seda', descritivo: 'Aumenta o poder dos golpes do tipo Normal.', categoria: 'Acessórios', valor: 24.90, valorPromo: 21.90, quantidade: 35, destaque: 0 },
  { codigo: 36, nome: 'Faixa Escolhida', descritivo: 'Aumenta muito o Ataque, mas prende o Pokémon a um só golpe.', categoria: 'Acessórios', valor: 54.90, valorPromo: 47.90, quantidade: 15, destaque: 0 },
  { codigo: 37, nome: 'Lenço Escolhido', descritivo: 'Aumenta muito a Velocidade, mas prende o Pokémon a um só golpe.', categoria: 'Acessórios', valor: 54.90, valorPromo: 47.90, quantidade: 15, destaque: 1 },
  { codigo: 38, nome: 'Orbe da Vida', descritivo: 'Aumenta o poder dos golpes em troca de um pouco de HP.', categoria: 'Acessórios', valor: 59.90, valorPromo: 52.90, quantidade: 10, destaque: 0 },
  { codigo: 39, nome: 'Incenso da Sorte', descritivo: 'Dobra o dinheiro ganho nas batalhas.', categoria: 'Acessórios', valor: 34.90, valorPromo: 29.90, quantidade: 30, destaque: 0 },
  { codigo: 40, nome: 'Incenso do Mar', descritivo: 'Aumenta o poder dos golpes do tipo Água.', categoria: 'Acessórios', valor: 29.90, valorPromo: 24.90, quantidade: 30, destaque: 0 },
  { codigo: 41, nome: 'Pedra Eterna', descritivo: 'Impede que o Pokémon que a segura evolua.', categoria: 'Acessórios', valor: 19.90, valorPromo: 16.90, quantidade: 50, destaque: 0 },

  // ===== Alimentos =====
  { codigo: 42, nome: 'Fruta Oran', descritivo: 'Recupera 10 HP durante a batalha, automaticamente.', categoria: 'Alimentos', valor: 4.90, valorPromo: 3.90, quantidade: 150, destaque: 0 },
  { codigo: 43, nome: 'Fruta Sitrus', descritivo: 'Recupera HP automaticamente quando o Pokémon está fraco.', categoria: 'Alimentos', valor: 6.90, valorPromo: 5.50, quantidade: 120, destaque: 1 },
  { codigo: 44, nome: 'Fruta Lum', descritivo: 'Cura qualquer problema de status na hora.', categoria: 'Alimentos', valor: 8.90, valorPromo: 7.50, quantidade: 80, destaque: 0 },
  { codigo: 45, nome: 'Fruta Pecha', descritivo: 'Cura o envenenamento automaticamente.', categoria: 'Alimentos', valor: 4.50, valorPromo: 3.50, quantidade: 100, destaque: 0 },
  { codigo: 46, nome: 'Fruta Cheri', descritivo: 'Cura a paralisia automaticamente.', categoria: 'Alimentos', valor: 4.50, valorPromo: 3.50, quantidade: 100, destaque: 0 },
  { codigo: 47, nome: 'Fruta Leppa', descritivo: 'Restaura os pontos de um golpe que se esgotou.', categoria: 'Alimentos', valor: 5.90, valorPromo: 4.90, quantidade: 90, destaque: 0 },
  { codigo: 48, nome: 'Água Fresca', descritivo: 'Água mineral refrescante que recupera HP.', categoria: 'Alimentos', valor: 3.90, valorPromo: 2.90, quantidade: 200, destaque: 0 },
  { codigo: 49, nome: 'Refrigerante', descritivo: 'Bebida gaseificada que recupera HP.', categoria: 'Alimentos', valor: 5.90, valorPromo: 4.50, quantidade: 150, destaque: 0 },
  { codigo: 50, nome: 'Limonada', descritivo: 'Limonada gelada que recupera bastante HP.', categoria: 'Alimentos', valor: 6.90, valorPromo: 5.50, quantidade: 120, destaque: 1 },
  { codigo: 51, nome: 'Leite Moomoo', descritivo: 'Leite nutritivo das Miltank. Recupera muito HP.', categoria: 'Alimentos', valor: 8.90, valorPromo: 7.50, quantidade: 60, destaque: 0 },
  { codigo: 52, nome: 'Bala Rara', descritivo: 'Doce raro que faz o Pokémon subir um nível.', categoria: 'Alimentos', valor: 49.90, valorPromo: 42.90, quantidade: 12, destaque: 1 },

  // ===== EvolutionStone =====
  { codigo: 53, nome: 'Pedra do Fogo', descritivo: 'Faz certos Pokémon evoluírem, como Vulpix e Eevee.', categoria: 'EvolutionStone', valor: 39.90, valorPromo: 34.90, quantidade: 15, destaque: 1 },
  { codigo: 54, nome: 'Pedra da Água', descritivo: 'Desperta a evolução de Pokémon como Staryu e Eevee.', categoria: 'EvolutionStone', valor: 39.90, valorPromo: 34.90, quantidade: 15, destaque: 0 },
  { codigo: 55, nome: 'Pedra do Trovão', descritivo: 'Faz Pikachu, Eevee e outros evoluírem.', categoria: 'EvolutionStone', valor: 39.90, valorPromo: 34.90, quantidade: 18, destaque: 1 },
  { codigo: 56, nome: 'Pedra da Folha', descritivo: 'Evolui Pokémon como Gloom, Exeggcute e Eevee.', categoria: 'EvolutionStone', valor: 39.90, valorPromo: 34.90, quantidade: 15, destaque: 0 },
  { codigo: 57, nome: 'Pedra da Lua', descritivo: 'Evolui Pokémon como Clefairy e Jigglypuff.', categoria: 'EvolutionStone', valor: 44.90, valorPromo: 39.90, quantidade: 12, destaque: 0 },
  { codigo: 58, nome: 'Pedra do Sol', descritivo: 'Evolui Pokémon como Sunkern e Cottonee.', categoria: 'EvolutionStone', valor: 44.90, valorPromo: 39.90, quantidade: 12, destaque: 0 },
  { codigo: 59, nome: 'Pedra Brilhante', descritivo: 'Evolui Pokémon como Togetic e Roselia.', categoria: 'EvolutionStone', valor: 49.90, valorPromo: 44.90, quantidade: 8, destaque: 0 },
  { codigo: 60, nome: 'Pedra do Crepúsculo', descritivo: 'Evolui Pokémon como Murkrow e Misdreavus.', categoria: 'EvolutionStone', valor: 49.90, valorPromo: 44.90, quantidade: 8, destaque: 0 },
  { codigo: 61, nome: 'Pedra da Alvorada', descritivo: 'Evolui Pokémon como Kirlia macho e Snorunt fêmea.', categoria: 'EvolutionStone', valor: 54.90, valorPromo: 49.90, quantidade: 6, destaque: 0 },
  { codigo: 62, nome: 'Pedra de Gelo', descritivo: 'Evolui Pokémon como Eevee e Vulpix de Alola.', categoria: 'EvolutionStone', valor: 49.90, valorPromo: 44.90, quantidade: 0, destaque: 0 },

];