// Cabeçalho da página: logo à esquerda e menu à direita.
// No celular o menu fica escondido (hidden); a partir do tablet aparece (md:flex).
function Cabecalho() {
  return (
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
  )
}

export default Cabecalho
