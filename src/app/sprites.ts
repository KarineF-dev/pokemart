const BASE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites';

export const item = (nome: string) => `${BASE}/items/${nome}.png`;
export const arte = (id: number) => `${BASE}/pokemon/other/official-artwork/${id}.png`;