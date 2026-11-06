// FASE 3: o App compõe os componentes, guarda o estado do filtro e passa dados por props.
import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import CardCuidado from './components/CardCuidado'
import CardTrilha from './components/CardTrilha'
import FiltrosDificuldade from './components/FiltrosDificuldade'
import Hero from './components/Hero'
import Rodape from './components/Rodape'
import { cuidados, trilhas } from './dados'

function App() {
  // ESTADO: qual filtro está escolhido. Começa em "Todas".
  // Quando o setFiltro é chamado, o React redesenha a tela com o valor novo.
  const [filtro, setFiltro] = useState('Todas')

  // Lista que aparece na tela: todas as trilhas ou só as da dificuldade escolhida
  let trilhasFiltradas = trilhas
  if (filtro !== 'Todas') {
    trilhasFiltradas = trilhas.filter((trilha) => trilha.dificuldade === filtro)
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

        {/* LISTAGEM PRINCIPAL: TRILHAS */}
        <section id="trilhas" className="py-6 md:py-8">
          <div className="mx-auto max-w-[1120px] px-4 md:px-8">
            <div className="mb-5 grid gap-3.5 lg:mb-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex items-baseline justify-between lg:justify-start lg:gap-3.5">
                <h2 className="text-[22px] font-bold text-emerald-950 md:text-2xl lg:text-[28px]">
                  Trilhas
                </h2>
                <span className="text-xs text-stone-500">{trilhasFiltradas.length} trilhas</span>
              </div>

              <FiltrosDificuldade filtroAtual={filtro} aoEscolher={setFiltro} />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
              {trilhasFiltradas.map((trilha) => (
                <CardTrilha key={trilha.nome} trilha={trilha} />
              ))}
            </div>
          </div>
        </section>

        {/* LISTAGEM SECUNDÁRIA: ANTES DE SAIR */}
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
