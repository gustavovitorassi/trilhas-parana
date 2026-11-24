# Trilhas do Paraná

Guia de trilhas do Paraná para quem quer sair da cidade e caminhar com segurança. A página única apresenta uma lista de trilhas (com cidade, nível de dificuldade, distância, duração e altitude), que pode ser filtrada por dificuldade, e uma segunda lista chamada "Antes de sair", com os itens essenciais para levar na mochila. Projeto desenvolvido como Trabalho de Conclusão de Disciplina (TCD) de Front-End, usando React, TypeScript e Tailwind CSS.

## Como rodar o projeto

É preciso ter o [Node.js](https://nodejs.org) instalado. No terminal, dentro da pasta do projeto:

```bash
npm install
npm run dev
```

Depois, abra no navegador o endereço que aparecer no terminal (normalmente `http://localhost:5173/`).

No Windows, se o PowerShell bloquear o `npm` ("a execução de scripts foi desabilitada"), use `npm.cmd install` e `npm.cmd run dev`.

## Fonte dos dados

- **Trilhas (listagem principal):** arquivo JSON local, `public/trilhas.json`, lido com `fetch` dentro de um `useEffect` (não é importado diretamente). Ele tem 10 trilhas, cada uma com 7 atributos: nome, cidade, dificuldade, distância, duração, altitude e descrição.
- **Antes de sair (listagem secundária):** vetor de objetos local, em `src/dados.ts`.

Os valores das trilhas são **aproximados**: foram reunidos de reportagens e guias de trilha (Bem Paraná, Tribuna do Paraná, Prefeitura de Curitiba, IAT-PR, Hiking Project, SummitPost e Civitatis), e as fontes nem sempre concordam. O símbolo "—" indica que não foi encontrado um valor confiável. Confira as condições da trilha com o parque ou o administrador antes de ir.

## Wireframes (Fase 1)

- [Mobile (até 767 px)](docs/wireframe-mobile.png)
- [Tablet (768 px a 1023 px)](docs/wireframe-tablet.png)
- [Desktop (a partir de 1024 px)](docs/wireframe-desktop.png)
