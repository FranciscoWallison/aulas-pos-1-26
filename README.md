# Aulas Pós-Graduação — Next.js

## Introdução

Projeto desenvolvido durante as aulas de pós-graduação, com foco em **React** e **Next.js** (App Router). O objetivo é praticar conceitos fundamentais de desenvolvimento front-end moderno, incluindo componentes, estado, consumo de API e estilização com Bootstrap.

A aplicação principal (`init-app`) é um formulário de busca de CEP que consulta a API [ViaCEP](https://viacep.com.br/) e preenche automaticamente o endereço.

---

## Tecnologias Utilizadas

- **Next.js** 16 (App Router)
- **React** 19
- **Bootstrap** 5
- **Node.js** >= 20

---

## Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd aula-pos
```

### 2. Instalar as dependências

```bash
cd init-app
npm install
```

### 3. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### 4. Build de produção

```bash
npm run build
npm start
```

---

## Estrutura do Projeto

```
aula-pos/
├── index.html              # Exemplo básico de DOM manipulation
└── init-app/               # Aplicação Next.js
    ├── app/
    │   ├── layout.js       # Layout raiz (fontes, metadata)
    │   ├── page.js         # Página principal (busca CEP)
    │   ├── globals.css     # Estilos globais
    │   └── page.module.css # CSS Modules (exemplo)
    ├── public/             # Arquivos estáticos (SVGs)
    ├── package.json
    └── next.config.mjs
```

---

## Comandos Básicos para Praticar

### Next.js / npm

| Comando | Descrição |
|---|---|
| `npx create-next-app@latest nome-app` | Cria um novo projeto Next.js |
| `npm install` | Instala as dependências do projeto |
| `npm run dev` | Inicia o servidor em modo desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm start` | Inicia o servidor com o build de produção |
| `npm install bootstrap` | Adiciona o Bootstrap ao projeto |

### Git

| Comando | Descrição |
|---|---|
| `git init` | Inicializa um repositório Git |
| `git add .` | Adiciona todos os arquivos ao stage |
| `git commit -m "mensagem"` | Cria um commit com mensagem |
| `git push origin main` | Envia os commits para o repositório remoto |
| `git pull` | Atualiza o repositório local |
| `git status` | Verifica o estado dos arquivos |
| `git log --oneline` | Histórico resumido de commits |

---

## Conceitos Praticados

- **Componentes React** — criação e reutilização (`Btn` com props)
- **useState** — gerenciamento de estado no client component
- **`'use client'`** — diretiva para componentes interativos no App Router
- **Fetch API** — consumo da API ViaCEP com `async/await`
- **Eventos** — `onClick`, `onChange`, `onBlur`
- **Bootstrap no Next.js** — importação via `import "bootstrap/dist/css/bootstrap.min.css"`

---

## Dicas Importantes

- Sempre use `'use client'` no topo do arquivo quando o componente precisar de interatividade (hooks, eventos).
- No App Router do Next.js, por padrão todo componente é **Server Component**. Apenas marque como Client Component quando necessário.
- Para instalar pacotes novos, rode `npm install <pacote>` dentro da pasta `init-app`.
- Se encontrar o erro de **embedded git repository**, remova o `.git` interno com:
  ```bash
  git rm --cached init-app -f
  rm -rf init-app/.git
  git add .
  ```

---

## Referências

- [Documentação Next.js](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Bootstrap 5](https://getbootstrap.com/docs/5.3)
- [API ViaCEP](https://viacep.com.br/)
