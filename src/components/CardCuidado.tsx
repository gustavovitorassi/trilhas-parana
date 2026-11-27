// Um item da seção "Antes de sair": ícone, título e descrição.
// No celular e no tablet o ícone fica ao lado do texto (grid); no desktop fica em cima (lg:block).
import type { Cuidado } from '../tipos'

type Props = {
  cuidado: Cuidado
}

function CardCuidado({ cuidado }: Props) {
  return (
    <article className="grid grid-cols-[40px_1fr] items-center gap-3 rounded-lg bg-white p-3.5 text-stone-800 lg:block">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-xl lg:mb-3.5">
        {cuidado.icone}
      </div>
      <div>
        <h3 className="text-sm font-bold">{cuidado.titulo}</h3>
        <p className="mt-1 text-sm leading-snug text-stone-600">{cuidado.descricao}</p>
      </div>
    </article>
  )
}

export default CardCuidado
