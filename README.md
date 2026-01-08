# Identity Form – React + TypeScript

Aplicação front-end para envio de dados de usuário (nome e e-mail), desenvolvida com foco em boas práticas exigidas em vagas front-end.

---

## Tecnologias utilizadas

- React
- TypeScript
- React Query (TanStack Query)
  - useMutation
  - Gerenciamento de estado assíncrono
- Axios
- Chakra UI

---

## Funcionalidades

- Formulário com inputs controlados
- Envio de dados via requisição POST
- Hook customizado para abstração da lógica de API
- Tipagem forte com TypeScript
- Estrutura pronta para integração com backend real

---

## Conceitos aplicados

- Controlled Components
- Custom Hooks
- Separation of Concerns
- Tipagem de dados de requisição
- Organização de projeto escalável
- Integração front-end com API REST

---

## Estrutura do projeto

```
src/
├── components/
│   └── input/
│       └── PrimaryInput.tsx
├── hooks/
│   └── useIdentityMutation.ts
├── interfaces/
│   └── person-data.ts
├── App.tsx
└── main.tsx
```

---

## Como rodar o projeto

```bash
npm install
npm run dev
```

---

## Observações

- Projeto focado em práticas comuns do mercado
- Ideal para demonstração de conhecimento em React Query e TypeScript
- Backend desacoplado do front-end