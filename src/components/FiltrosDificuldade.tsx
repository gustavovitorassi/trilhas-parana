// Os quatro botões de filtro (Todas, Fácil, Moderada, Difícil).
// Não guarda estado: recebe o filtro atual e uma função para avisar o App quando o botão é clicado.
type Props = {
  filtroAtual: string
  aoEscolher: (dificuldade: string) => void
}

const opcoes = ['Todas', 'Fácil', 'Moderada', 'Difícil']

function FiltrosDificuldade({ filtroAtual, aoEscolher }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {opcoes.map((opcao) => {
        // Botão comum ou, se for o escolhido, destacado em verde
        let estilo = 'border-stone-400 bg-white hover:border-emerald-800'
        if (opcao === filtroAtual) {
          estilo = 'border-emerald-800 bg-emerald-800 font-bold text-white'
        }

        return (
          <button
            key={opcao}
            type="button"
            aria-pressed={opcao === filtroAtual}
            onClick={() => aoEscolher(opcao)}
            className={`rounded-full border px-3.5 py-1.5 text-xs ${estilo}`}
          >
            {opcao}
          </button>
        )
      })}
    </div>
  )
}

export default FiltrosDificuldade
