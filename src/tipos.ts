
export type Trilha = {
  nome: string
  cidade: string
  dificuldade: string // "Fácil", "Moderada" ou "Difícil"
  distancia: string
  duracao: string
  altitude: string
  descricao: string
}

// Item da listagem secundária (Antes de sair)
export type Cuidado = {
  icone: string
  titulo: string
  descricao: string
}
