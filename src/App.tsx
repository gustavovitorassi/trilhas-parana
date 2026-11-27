// FASE 4: as trilhas agora vêm de um arquivo JSON, buscado com fetch dentro de um useEffect.
import { useEffect, useState } from 'react'
import Cabecalho from './components/Cabecalho'
import CardCuidado from './components/CardCuidado'
import CardTrilha from './components/CardTrilha'
import FiltrosDificuldade from './components/FiltrosDificuldade'
import Hero from './components/Hero'
import Rodape from './components/Rodape'
import { cuidados } from './dados'
import type { Trilha } from './tipos'

function App() {
  // ESTADOS
  const [trilhas, setTrilhas] = useState<Trilha[]>([]) // dados que vêm do JSON (começa vazio)
  const [carregando, setCarregando] = useState(true) // true enquanto a resposta não chega
  const [erro, setErro] = useState('') // mensagem de erro ('' quer dizer que não deu erro)
  const [filtro, setFiltro] = useState('Todas') // filtro escolhido (interação da Fase 3)

  // EFEITO: roda uma vez, quando a página abre, e busca o arquivo JSON
  useEffect(() => {
    fetch('/trilhas.json')
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error('Resposta inválida')
        }
        return resposta.json()
      })
      .then((dados: Trilha[]) => {
        setTrilhas(dados)
        setCarregando(false)
      })
      .catch(() => {
        setErro('Não foi possível carregar as trilhas. Tente novamente mais tarde.')
        setCarregando(false)
      })
  }, [])

  // Lista que aparece na tela: todas as trilhas ou só as da dificuldade escolhida
  let trilhasFiltradas = trilhas
  if (filtro !== 'Todas') {
    trilhasFiltradas = trilhas.filter((trilha) => trilha.dificuldade === filtro)
  }

  // Contador: só aparece quando as trilhas já foram carregadas
  let textoContador = ''
  if (!carregando && erro === '') {
    textoContador = `${trilhasFiltradas.length} trilhas`
  }

  // O que aparece no lugar da lista: os cards, a mensagem de carregamento ou a de erro
  let areaTrilhas = (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
      {trilhasFiltradas.map((trilha) => (
        <CardTrilha key={trilha.nome} trilha={trilha} />
      ))}
    </div>
  )
  if (carregando) {
    areaTrilhas = (
      <p
        role="status"
        className="rounded-lg border border-dashed border-stone-400 bg-white p-6 text-center text-stone-600"
      >
        Carregando trilhas…
      </p>
    )
  }
  if (erro !== '') {
    areaTrilhas = (
      <p
        role="alert"
        className="rounded-lg border border-rose-300 bg-rose-50 p-6 text-center text-rose-800"
      >
        {erro}
      </p>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Desenho da montanha: definido uma vez aqui e reaproveitado com <use> nos componentes */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <symbol id="montanha" viewBox="0 0 56 40">
          <polygon points="24,2 46,38 2,38" fill="currentColor" />
          <polygon points="40,12 54,38 28,38" fill="currentColor" opacity="0.55" />
        </symbol>
      </svg>

      <Cabecalho />

      <main>
        <Hero totalTrilhas={trilhas.length} />

        {/* LISTAGEM PRINCIPAL: TRILHAS (vem do JSON) */}
        <section id="trilhas" className="py-6 md:py-8">
          <div className="mx-auto max-w-[1120px] px-4 md:px-8">
            <div className="mb-5 grid gap-3.5 lg:mb-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex items-baseline justify-between lg:justify-start lg:gap-3.5">
                <h2 className="text-[22px] font-bold text-emerald-950 md:text-2xl lg:text-[28px]">
                  Trilhas
                </h2>
                <span className="text-xs text-stone-500">{textoContador}</span>
              </div>

              <FiltrosDificuldade filtroAtual={filtro} aoEscolher={setFiltro} />
            </div>

            {areaTrilhas}
          </div>
        </section>

        {/* LISTAGEM SECUNDÁRIA: ANTES DE SAIR (vetor local) */}
        <section id="preparo" className="bg-emerald-900 py-6 text-white md:py-8 lg:py-9">
          <div className="mx-auto max-w-[1120px] px-4 md:px-8">
            <h2 className="text-[22px] font-bold md:text-2xl lg:text-[28px]">Antes de sair</h2>
            <p className="mb-5 mt-2 max-w-[34rem] text-emerald-100">
              Quatro cuidados simples para chegar e voltar em segurança.
            </p>

            <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-5">
              {cuidados.map((cuidado) => (
                <CardCuidado key={cuidado.titulo} cuidado={cuidado} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  )
}

export default App
