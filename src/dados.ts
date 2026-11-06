// Os dados das duas listagens, como vetores (arrays) de objetos.
// Valores aproximados, pesquisados em reportagens e sites de trilha: conferir antes da Fase 4.
// "—" significa que não encontrei um valor confiável.
import type { Cuidado, Trilha } from './tipos'

export const trilhas: Trilha[] = [
  {
    nome: 'Morro Pão de Loth',
    cidade: 'Quatro Barras – PR',
    dificuldade: 'Fácil',
    distancia: '9 km',
    duracao: '≈ 2 h',
    altitude: '1.300 m',
    descricao:
      'Subida curta e bem sinalizada, boa para começar. Do alto se vê a represa de Piraquara e Curitiba.',
  },
  {
    nome: 'Morro da Palha',
    cidade: 'Campo Magro – PR',
    dificuldade: 'Fácil',
    distancia: '—',
    duracao: '≈ 2 h',
    altitude: '1.190 m',
    descricao: 'Passeio em família com vista panorâmica da região e estrutura simples ao pé do morro.',
  },
  {
    nome: 'Morro do Anhangava',
    cidade: 'Quatro Barras – PR',
    dificuldade: 'Moderada',
    distancia: '8 km',
    duracao: '≈ 2 h',
    altitude: '1.420 m',
    descricao: 'Conhecido pela escalada em rocha, com vista de Curitiba e da Serra do Mar.',
  },
  {
    nome: 'Caminho do Itupava',
    cidade: 'Quatro Barras / Morretes – PR',
    dificuldade: 'Moderada',
    distancia: '22 km',
    duracao: '≈ 7 h',
    altitude: '—',
    descricao:
      'Caminho histórico de pedra entre a serra e o litoral. Longo e cansativo, mas sem trechos técnicos.',
  },
  {
    nome: 'Pico do Marumbi',
    cidade: 'Morretes – PR',
    dificuldade: 'Difícil',
    distancia: '14 km',
    duracao: '5 a 8 h',
    altitude: '1.539 m',
    descricao:
      'Trilha longa no Parque Estadual do Marumbi, na Serra do Mar. Os 14 km são de ida e volta.',
  },
  {
    nome: 'Pico Paraná',
    cidade: 'Campina Grande do Sul – PR',
    dificuldade: 'Difícil',
    distancia: '8 km',
    duracao: '≈ 7 h',
    altitude: '1.877 m',
    descricao:
      'Ponto mais alto do Sul do Brasil, com raízes, grampos de ferro e subida constante. Os 8 km são só de ida.',
  },
]

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
