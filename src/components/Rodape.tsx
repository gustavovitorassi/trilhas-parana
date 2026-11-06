// Rodapé: nome do projeto e a fonte dos dados.
function Rodape() {
  return (
    <footer className="bg-stone-200 py-4 text-xs text-stone-600">
      <div className="mx-auto grid max-w-[1120px] gap-1 px-4 md:grid-cols-[1fr_auto] md:items-end md:px-8">
        <div>
          <strong className="mb-1 block text-[13px] text-stone-800">Trilhas do Paraná</strong>
          TCD de Front-End · React, TypeScript e Tailwind
        </div>
        <div>Fonte dos dados: será definida na Fase 4</div>
      </div>
    </footer>
  )
}

export default Rodape
