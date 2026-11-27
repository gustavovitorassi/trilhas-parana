// Dados da listagem secundária (Antes de sair), em um vetor (array) de objetos local.
// As trilhas, que são a listagem principal, agora vêm do arquivo public/trilhas.json.
import type { Cuidado } from './tipos'

export const cuidados: Cuidado[] = [
  {
    icone: '💧',
    titulo: 'Água e lanche leve',
    descricao: 'Leve mais água do que acha que vai precisar e algo leve para comer.',
  },
  {
    icone: '🥾',
    titulo: 'Calçado de trilha',
    descricao: 'Tênis ou bota com solado aderente, de preferência já usados antes.',
  },
  {
    icone: '🧥',
    titulo: 'Roupa em camadas',
    descricao: 'O tempo muda rápido na serra: leve um corta-vento e uma capa de chuva.',
  },
  {
    icone: '📍',
    titulo: 'Avise alguém',
    descricao: 'Conte o roteiro e o horário de volta, e faça o cadastro na base do parque.',
  },
]
