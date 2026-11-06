// Um card de trilha: faixa colorida com selo, nome, cidade, descrição e três dados.
// A cor da faixa e do selo muda conforme a dificuldade.
import type { Trilha } from '../tipos'

type Props = {
  trilha: Trilha
}

function CardTrilha({ trilha }: Props) {
  // Cores da dificuldade "Fácil" (padrão); as outras trocam abaixo
  let corFaixa = 'bg-emerald-100 text-emerald-600'
  let corSelo = 'bg-emerald-700'
  if (trilha.dificuldade === 'Moderada') {
    corFaixa = 'bg-amber-100 text-amber-600'
    corSelo = 'bg-amber-700'
  }
  if (trilha.dificuldade === 'Difícil') {
    corFaixa = 'bg-rose-100 text-rose-600'
    corSelo = 'bg-rose-700'
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-stone-300 bg-white">
      <div
        className={`relative flex h-[90px] items-center justify-center md:h-[100px] lg:h-[110px] ${corFaixa}`}
      >
        <span
          className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white ${corSelo}`}
        >
          {trilha.dificuldade}
        </span>
        <svg className="mt-2 h-10 w-14" aria-hidden="true">
          <use href="#montanha" />
        </svg>
      </div>
      <div className="flex flex-1 flex-col p-3.5">
        <h3 className="text-[15px] font-bold">{trilha.nome}</h3>
        <p className="mb-2.5 mt-1 text-xs text-stone-500">{trilha.cidade}</p>
        <p className="mb-3.5 text-sm leading-snug text-stone-600">{trilha.descricao}</p>
        <div className="mt-auto grid grid-cols-3 border-t border-stone-200 pt-3">
          <div>
            <span className="block text-[10px] text-stone-500">Distância</span>
            <strong className="text-[13px]">{trilha.distancia}</strong>
          </div>
          <div className="border-l border-stone-200 pl-2">
            <span className="block text-[10px] text-stone-500">Duração</span>
            <strong className="text-[13px]">{trilha.duracao}</strong>
          </div>
          <div className="border-l border-stone-200 pl-2">
            <span className="block text-[10px] text-stone-500">Altitude</span>
            <strong className="text-[13px]">{trilha.altitude}</strong>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CardTrilha
