// Primeira área da página: título, texto, botão e os três números.
// Recebe por props o total de trilhas, que aparece no primeiro número.
type Props = {
  totalTrilhas: number
}

function Hero({ totalTrilhas }: Props) {
  return (
    <section className="border-b border-emerald-200 bg-emerald-50 py-6 md:py-8 lg:py-10">
      <div className="mx-auto max-w-[1120px] px-4 md:px-8 lg:grid lg:grid-cols-[1fr_400px] lg:items-center lg:gap-10">
        <div>
          <h1 className="text-[26px] font-bold leading-tight text-emerald-950 md:text-[32px] lg:text-[42px]">
            Descubra trilhas <span className="block md:inline lg:block">no Paraná</span>
          </h1>
          <p className="mt-4 max-w-[34rem] text-stone-700 md:text-lg">
            Um guia de trilhas do estado para todos os níveis, com distância, duração e altitude de
            cada uma.
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
            <strong className="block text-xl text-emerald-900">{totalTrilhas}</strong>
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
  )
}

export default Hero
