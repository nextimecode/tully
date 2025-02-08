<p align="center">
  <a href="https://www.nextime.com.br/">
    <img src="https://github.com/nextimecode.png" width="150px" height="150px" alt="Nextime logo" />
  </a>
  <h1 align="center">NeXTIME - Every Second Counts</h1>
</p>

<p align="left">
  <img src="./assets/logo.jpeg" width="300px" height="212px" alt="Chakra logo" />
</p>

# Projeto Tully - Família, Dever e Honra

**Tully** é o monorepo central da nossa software house, responsável por organizar e integrar todos os projetos dos clientes de forma eficiente e escalável. Inspirado na Casa Tully, que valoriza _Família, Dever e Honra_, o monorepo reflete esses princípios através da colaboração entre equipes e da entrega de soluções robustas.

## Índice

- [Projeto Tully - Família, Dever e Honra](#projeto-tully---família-dever-e-honra)
  - [Índice](#índice)
  - [Tecnologias](#tecnologias)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Como Rodar o Projeto](#como-rodar-o-projeto)
  - [Commits e Convenções](#commits-e-convenções)
  - [Contribuições](#contribuições)
  - [Licença](#licença)

## Tecnologias

- **TypeScript**
- **React.js** / **Next.js 15**
- **TailwindCSS** / **Preline UI**
- **Node.js**
- **Supabase** / **PostgreSQL**
- **Prisma**
- **Zod** / **Vitest**
- **Swagger** / **Orval**
- **Turborepo** para gerenciamento do monorepo

## Estrutura do Projeto

```
/tully
  /apps
    /cliente1
    /cliente2
  /packages
    /shared-components
    /utils
  /libs
    /config
    /hooks
```

- **/apps**: Contém os projetos dos clientes.
- **/packages**: Componentes e utilitários reutilizáveis.
- **/libs**: Bibliotecas internas para configuração e hooks.

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/tully.git
   ```

2. Instale as dependências:

   ```bash
   pnpm install
   ```

3. Rode o projeto:
   ```bash
   pnpm dev
   ```

## Commits e Convenções

Este projeto segue o padrão de **Conventional Commits**. Certifique-se de que suas mensagens de commit estejam no formato correto.

Exemplo:

```bash
feat: adiciona novo componente de botão reutilizável
fix: corrige bug na validação de formulário
```

## Contribuições

Contribuições são bem-vindas! Siga as boas práticas de **Clean Code**, **DDD** e **TDD** para manter a qualidade do projeto.

1. Crie uma branch:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
2. Faça suas alterações e envie um PR.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
