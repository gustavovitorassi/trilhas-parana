function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Desenho da montanha: definido uma vez e reaproveitado com <use> */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <symbol id="montanha" viewBox="0 0 56 40">
          <polygon points="24,2 46,38 2,38" fill="currentColor" />
          <polygon points="40,12 54,38 28,38" fill="currentColor" opacity="0.55" />
        </symbol>
      </svg>

      {/* 1. CABEÇALHO */}
      <header className="border-b border-stone-300 bg-white">
        <div className="mx-auto flex h-[60px] max-w-[1120px] items-center justify-between px-4 md:h-[68px] md:px-8 lg:h-[72px]">
          <a href="#" className="flex items-center gap-2.5 font-bold text-emerald-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800 md:h-9 md:w-9">
              <svg className="h-[18px] w-[18px] text-white" aria-hidden="true">
                <use href="#montanha" />
              </svg>
            </span>
            Trilhas do Paraná
          </a>
          {/* No celular o menu fica escondido; aparece a partir do tablet */}
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#trilhas" className="font-bold hover:underline">
              Trilhas
            </a>
            <a href="#preparo" className="hover:underline">
              Antes de sair
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* pagina */}
        <section className="border-b border-emerald-200 bg-emerald-50 py-6 md:py-8 lg:py-10">
          <div className="mx-auto max-w-[1120px] px-4 md:px-8 lg:grid lg:grid-cols-[1fr_400px] lg:items-center lg:gap-10">
            <div>
              <h1 className="text-[26px] font-bold leading-tight text-emerald-950 md:text-[32px] lg:text-[42px]">
                Descubra trilhas{' '}
                <span className="block md:inline lg:block">no Paraná</span>
              </h1>
              <p className="mt-4 max-w-[34rem] text-stone-700 md:text-lg">
                Um guia de trilhas do estado para todos os níveis, com distância, duração e altitude
                de cada uma.
              </p>
              <a
                href="#trilhas"
                className="mt-6 inline-block rounded-md bg-emerald-800 px-7 py-3 text-sm font-bold text-white hover:bg-emerald-900"
              >
                Ver trilhas
              </a>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-2 md:gap-4 lg:mt-0 lg:grid-cols-1">
              <div className="rounded-lg border border-emerald-200 bg-white py-2.5 text-center md:py-3.5">
                <strong className="block text-xl text-emerald-900">6</strong>
                <span className="text-xs text-stone-500">trilhas</span>
              </div>
              <div className="rounded-lg border border-emerald-200 bg-white py-2.5 text-center md:py-3.5">
                <strong className="block text-xl text-emerald-900">3</strong>
                <span className="text-xs text-stone-500">níveis</span>
              </div>
              <div className="rounded-lg border border-emerald-200 bg-white py-2.5 text-center md:py-3.5">
                <strong className="block text-xl text-emerald-900">PR</strong>
                <span className="text-xs text-stone-500">estado</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. LISTAGEM PRINCIPAL: TRILHAS */}
        <section id="trilhas" className="py-6 md:py-8">
          <div className="mx-auto max-w-[1120px] px-4 md:px-8">
            <div className="mb-5 grid gap-3.5 lg:mb-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex items-baseline justify-between lg:justify-start lg:gap-3.5">
                <h2 className="text-[22px] font-bold text-emerald-950 md:text-2xl lg:text-[28px]">
                  Trilhas
                </h2>
                <span className="text-xs text-stone-500">6 trilhas</span>
              </div>

              {/* Filtros: por enquanto só visual.*/}
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="rounded-full border border-emerald-800 bg-emerald-800 px-3.5 py-1.5 text-xs font-bold text-white"
                >
                  Todas
                </button>
                <button
                  type="button"
                  className="rounded-full border border-stone-400 bg-white px-3.5 py-1.5 text-xs hover:border-emerald-800"
                >
                  Fácil
                </button>
                <button
                  type="button"
                  className="rounded-full border border-stone-400 bg-white px-3.5 py-1.5 text-xs hover:border-emerald-800"
                >
                  Moderada
                </button>
                <button
                  type="button"
                  className="rounded-full border border-stone-400 bg-white px-3.5 py-1.5 text-xs hover:border-emerald-800"
                >
                  Difícil
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
              {/* Card 1: Pão de Loth */}
              <article className="flex flex-col overflow-hidden rounded-lg border border-stone-300 bg-white">
                <div className="relative flex h-[90px] items-center justify-center bg-emerald-100 text-emerald-600 md:h-[100px] lg:h-[110px]">
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-emerald-700 px-2.5 py-0.5 text-[10px] font-bold text-white">
                    Fácil
                  </span>
                  <svg className="mt-2 h-10 w-14" aria-hidden="true">
                    <use href="#montanha" />
                  </svg>
                </div>
                <div className="flex flex-1 flex-col p-3.5">
                  <h3 className="text-[15px] font-bold">Morro Pão de Loth</h3>
                  <p className="mb-2.5 mt-1 text-xs text-stone-500">Quatro Barras – PR</p>
                  <p className="mb-3.5 text-sm leading-snug text-stone-600">
                    Subida curta e bem sinalizada, boa para começar. Do alto se vê a represa de
                    Piraquara e Curitiba.
                  </p>
                  <div className="mt-auto grid grid-cols-3 border-t border-stone-200 pt-3">
                    <div>
                      <span className="block text-[10px] text-stone-500">Distância</span>
                      <strong className="text-[13px]">9 km</strong>
                    </div>
                    <div className="border-l border-stone-200 pl-2">
                      <span className="block text-[10px] text-stone-500">Duração</span>
                      <strong className="text-[13px]"> 2 h</strong>
                    </div>
                    <div className="border-l border-stone-200 pl-2">
                      <span className="block text-[10px] text-stone-500">Altitude</span>
                      <strong className="text-[13px]">1.300 m</strong>
                    </div>
                  </div>
                </div>
              </article>

              {/* Card 2: Morro da Palha */}
              <article className="flex flex-col overflow-hidden rounded-lg border border-stone-300 bg-white">
                <div className="relative flex h-[90px] items-center justify-center bg-emerald-100 text-emerald-600 md:h-[100px] lg:h-[110px]">
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-emerald-700 px-2.5 py-0.5 text-[10px] font-bold text-white">
                    Fácil
                  </span>
                  <svg className="mt-2 h-10 w-14" aria-hidden="true">
                    <use href="#montanha" />
                  </svg>
                </div>
                <div className="flex flex-1 flex-col p-3.5">
                  <h3 className="text-[15px] font-bold">Morro da Palha</h3>
                  <p className="mb-2.5 mt-1 text-xs text-stone-500">Campo Magro – PR</p>
                  <p className="mb-3.5 text-sm leading-snug text-stone-600">
                    Passeio em família com vista panorâmica da região e estrutura simples ao pé do
                    morro.
                  </p>
                  <div className="mt-auto grid grid-cols-3 border-t border-stone-200 pt-3">
                    <div>
                      <span className="block text-[10px] text-stone-500">Distância</span>
                      <strong className="text-[13px]">—</strong>
                    </div>
                    <div className="border-l border-stone-200 pl-2">
                      <span className="block text-[10px] text-stone-500">Duração</span>
                      <strong className="text-[13px]"> 2 h</strong>
                    </div>
                    <div className="border-l border-stone-200 pl-2">
                      <span className="block text-[10px] text-stone-500">Altitude</span>
                      <strong className="text-[13px]">1.190 m</strong>
                    </div>
                  </div>
                </div>
              </article>

              {/* Card 3: Morro do Anhangava */}
              <article className="flex flex-col overflow-hidden rounded-lg border border-stone-300 bg-white">
                <div className="relative flex h-[90px] items-center justify-center bg-amber-100 text-amber-600 md:h-[100px] lg:h-[110px]">
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-amber-700 px-2.5 py-0.5 text-[10px] font-bold text-white">
                    Moderada
                  </span>
                  <svg className="mt-2 h-10 w-14" aria-hidden="true">
                    <use href="#montanha" />
                  </svg>
                </div>
                <div className="flex flex-1 flex-col p-3.5">
                  <h3 className="text-[15px] font-bold">Morro do Anhangava</h3>
                  <p className="mb-2.5 mt-1 text-xs text-stone-500">Quatro Barras – PR</p>
                  <p className="mb-3.5 text-sm leading-snug text-stone-600">
                    Conhecido pela escalada em rocha, com vista de Curitiba e da Serra do Mar.
                  </p>
                  <div className="mt-auto grid grid-cols-3 border-t border-stone-200 pt-3">
                    <div>
                      <span className="block text-[10px] text-stone-500">Distância</span>
                      <strong className="text-[13px]">8 km</strong>
                    </div>
                    <div className="border-l border-stone-200 pl-2">
                      <span className="block text-[10px] text-stone-500">Duração</span>
                      <strong className="text-[13px]"> 2 h</strong>
                    </div>
                    <div className="border-l border-stone-200 pl-2">
                      <span className="block text-[10px] text-stone-500">Altitude</span>
                      <strong className="text-[13px]">1.420 m</strong>
                    </div>
                  </div>
                </div>
              </article>

              {/* Card 4: Caminho do Itupava */}
              <article className="flex flex-col overflow-hidden rounded-lg border border-stone-300 bg-white">
                <div className="relative flex h-[90px] items-center justify-center bg-amber-100 text-amber-600 md:h-[100px] lg:h-[110px]">
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-amber-700 px-2.5 py-0.5 text-[10px] font-bold text-white">
                    Moderada
                  </span>
                  <svg className="mt-2 h-10 w-14" aria-hidden="true">
                    <use href="#montanha" />
                  </svg>
                </div>
                <div className="flex flex-1 flex-col p-3.5">
                  <h3 className="text-[15px] font-bold">Caminho do Itupava</h3>
                  <p className="mb-2.5 mt-1 text-xs text-stone-500">Quatro Barras / Morretes – PR</p>
                  <p className="mb-3.5 text-sm leading-snug text-stone-600">
                    Caminho histórico de pedra entre a serra e o litoral. Longo e cansativo, mas sem
                    trechos técnicos.
                  </p>
                  <div className="mt-auto grid grid-cols-3 border-t border-stone-200 pt-3">
                    <div>
                      <span className="block text-[10px] text-stone-500">Distância</span>
                      <strong className="text-[13px]">22 km</strong>
                    </div>
                    <div className="border-l border-stone-200 pl-2">
                      <span className="block text-[10px] text-stone-500">Duração</span>
                      <strong className="text-[13px]">≈ 7 h</strong>
                    </div>
                    <div className="border-l border-stone-200 pl-2">
                      <span className="block text-[10px] text-stone-500">Altitude</span>
                      <strong className="text-[13px]">—</strong>
                    </div>
                  </div>
                </div>
              </article>

              {/* Card 5: Pico do Marumbi */}
              <article className="flex flex-col overflow-hidden rounded-lg border border-stone-300 bg-white">
                <div className="relative flex h-[90px] items-center justify-center bg-rose-100 text-rose-600 md:h-[100px] lg:h-[110px]">
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-rose-700 px-2.5 py-0.5 text-[10px] font-bold text-white">
                    Difícil
                  </span>
                  <svg className="mt-2 h-10 w-14" aria-hidden="true">
                    <use href="#montanha" />
                  </svg>
                </div>
                <div className="flex flex-1 flex-col p-3.5">
                  <h3 className="text-[15px] font-bold">Pico do Marumbi</h3>
                  <p className="mb-2.5 mt-1 text-xs text-stone-500">Morretes – PR</p>
                  <p className="mb-3.5 text-sm leading-snug text-stone-600">
                    Trilha longa no Parque Estadual do Marumbi, na Serra do Mar. Os 14 km são de ida
                    e volta.
                  </p>
                  <div className="mt-auto grid grid-cols-3 border-t border-stone-200 pt-3">
                    <div>
                      <span className="block text-[10px] text-stone-500">Distância</span>
                      <strong className="text-[13px]">14 km</strong>
                    </div>
                    <div className="border-l border-stone-200 pl-2">
                      <span className="block text-[10px] text-stone-500">Duração</span>
                      <strong className="text-[13px]">5 a 8 h</strong>
                    </div>
                    <div className="border-l border-stone-200 pl-2">
                      <span className="block text-[10px] text-stone-500">Altitude</span>
                      <strong className="text-[13px]">1.539 m</strong>
                    </div>
                  </div>
                </div>
              </article>

              {/* Card 6: Pico Paraná */}
              <article className="flex flex-col overflow-hidden rounded-lg border border-stone-300 bg-white">
                <div className="relative flex h-[90px] items-center justify-center bg-rose-100 text-rose-600 md:h-[100px] lg:h-[110px]">
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-rose-700 px-2.5 py-0.5 text-[10px] font-bold text-white">
                    Difícil
                  </span>
                  <svg className="mt-2 h-10 w-14" aria-hidden="true">
                    <use href="#montanha" />
                  </svg>
                </div>
                <div className="flex flex-1 flex-col p-3.5">
                  <h3 className="text-[15px] font-bold">Pico Paraná</h3>
                  <p className="mb-2.5 mt-1 text-xs text-stone-500">Campina Grande do Sul – PR</p>
                  <p className="mb-3.5 text-sm leading-snug text-stone-600">
                    Ponto mais alto do Sul do Brasil, com raízes, grampos de ferro e subida
                    constante. Os 8 km são só de ida.
                  </p>
                  <div className="mt-auto grid grid-cols-3 border-t border-stone-200 pt-3">
                    <div>
                      <span className="block text-[10px] text-stone-500">Distância</span>
                      <strong className="text-[13px]">8 km</strong>
                    </div>
                    <div className="border-l border-stone-200 pl-2">
                      <span className="block text-[10px] text-stone-500">Duração</span>
                      <strong className="text-[13px]">≈ 7 h</strong>
                    </div>
                    <div className="border-l border-stone-200 pl-2">
                      <span className="block text-[10px] text-stone-500">Altitude</span>
                      <strong className="text-[13px]">1.877 m</strong>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 4.ANTES DE SAIR */}
        <section id="preparo" className="bg-emerald-900 py-6 text-white md:py-8 lg:py-9">
          <div className="mx-auto max-w-[1120px] px-4 md:px-8">
            <h2 className="text-[22px] font-bold md:text-2xl lg:text-[28px]">Antes de sair</h2>
            <p className="mb-5 mt-2 max-w-[34rem] text-emerald-100">
              Quatro cuidados simples para chegar e voltar em segurança.
            </p>

            {/* Celular: linhas empilhadas. Tablet: grade 2x2. Desktop: 4 colunas */}
            <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-5">
              <article className="grid grid-cols-[40px_1fr] items-center gap-3 rounded-lg bg-white p-3.5 text-stone-800 lg:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-xl lg:mb-3.5">
                  
                </div>
                <div>
                  <h3 className="text-sm font-bold">Água e lanche leve</h3>
                  <p className="mt-1 text-sm leading-snug text-stone-600">
                    Leve mais água do que acha que vai precisar e algo leve para comer.
                  </p>
                </div>
              </article>

              <article className="grid grid-cols-[40px_1fr] items-center gap-3 rounded-lg bg-white p-3.5 text-stone-800 lg:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-xl lg:mb-3.5">
                  
                </div>
                <div>
                  <h3 className="text-sm font-bold">Calçado de trilha</h3>
                  <p className="mt-1 text-sm leading-snug text-stone-600">
                    Tênis ou bota com solado aderente, de preferência já usados antes.
                  </p>
                </div>
              </article>

              <article className="grid grid-cols-[40px_1fr] items-center gap-3 rounded-lg bg-white p-3.5 text-stone-800 lg:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-xl lg:mb-3.5">
                  
                </div>
                <div>
                  <h3 className="text-sm font-bold">Roupa em camadas</h3>
                  <p className="mt-1 text-sm leading-snug text-stone-600">
                    O tempo muda rápido na serra: leve um corta-vento e uma capa de chuva.
                  </p>
                </div>
              </article>

              <article className="grid grid-cols-[40px_1fr] items-center gap-3 rounded-lg bg-white p-3.5 text-stone-800 lg:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-xl lg:mb-3.5">
                  
                </div>
                <div>
                  <h3 className="text-sm font-bold">Avise alguém</h3>
                  <p className="mt-1 text-sm leading-snug text-stone-600">
                    Conte o roteiro e o horário de volta, e faça o cadastro na base do parque.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* 5. RODAPÉ */}
      <footer className="bg-stone-200 py-4 text-xs text-stone-600">
        <div className="mx-auto grid max-w-[1120px] gap-1 px-4 md:grid-cols-[1fr_auto] md:items-end md:px-8">
          <div>
            <strong className="mb-1 block text-[13px] text-stone-800">Trilhas do Paraná</strong>
            TCD de Front-End · React, TypeScript e Tailwind
          </div>
          <div>Fonte dos dados: será definida na Fase 4</div>
        </div>
      </footer>
    </div>
  )
}

export default App
