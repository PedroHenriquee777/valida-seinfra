# Frontend

Setup inicial do frontend da aplicação, com a estrutura de projeto e dependências configuradas para início do desenvolvimento.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn/UI
- React Hook Form
- Zod
- Axios
- TanStack Query
- Prettier

## Estrutura de pastas

```
src/
│
├── app/
│   ├── auth/
│   ├── (dashboard)/
│   ├── api/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   ├── forms/
│   └── layouts/
│
├── hooks/
├── services/
├── lib/
├── schemas/
├── types/
├── constants/
├── providers/
├── assets/
└── styles/
```

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
npm install
```

Crie o arquivo `.env` na raiz do projeto com base no `.env.example` (se houver).

## Executando o projeto

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera o build de produção
- `npm run lint` — formata o código com o Prettier