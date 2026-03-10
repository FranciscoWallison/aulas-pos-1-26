
# Aulas Pós-Graduação — Next.js

## Introdução

Projeto desenvolvido durante as aulas de pós-graduação, com foco em **React** e **Next.js** (App Router). O objetivo é praticar conceitos fundamentais de desenvolvimento front-end moderno, incluindo componentes, estado, consumo de API, estilização com Bootstrap, operações CRUD e integração com banco de dados.

A aplicação principal (`init-app`) possui:
- **Busca de CEP** — formulário que consulta a API [ViaCEP](https://viacep.com.br/) e preenche automaticamente o endereço.
- **CRUD de Usuários** — cadastro, listagem, edição e exclusão de usuários com Prisma + SQLite.

---

## Tecnologias Utilizadas

- **Next.js** 16 (App Router)
- **React** 19
- **Bootstrap** 5
- **Prisma** 5 (ORM)
- **SQLite** (banco de dados local)
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

### 3. Configurar o banco de dados (Prisma)

```bash
npx prisma migrate dev
npx prisma generate
```

### 4. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### 5. Build de produção

```bash
npm run build
npm start
```

---

## Estrutura do Projeto

```
aula-pos/
├── index.html                          # Exemplo básico de DOM manipulation
└── init-app/                           # Aplicação Next.js
    ├── app/
    │   ├── layout.js                   # Layout raiz (fontes, metadata)
    │   ├── page.js                     # Página principal (busca CEP)
    │   ├── globals.css                 # Estilos globais
    │   ├── page.module.css             # CSS Modules (exemplo)
    │   ├── clientes/
    │   │   └── page.js                 # Página CRUD de usuários
    │   └── api/
    │       └── clientes/
    │           ├── route.js            # GET (listar) e POST (criar)
    │           └── [id]/
    │               └── route.js        # GET, PUT, DELETE por ID
    ├── lib/
    │   └── prisma.js                   # Singleton do Prisma Client
    ├── prisma/
    │   ├── schema.prisma               # Schema do banco de dados
    │   ├── migrations/                 # Histórico de migrações
    │   └── SQLite.db                   # Banco de dados SQLite
    ├── public/                         # Arquivos estáticos (SVGs)
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

### Prisma (ORM)

| Comando | Descrição |
|---|---|
| `npm install prisma @prisma/client` | Instala o Prisma no projeto |
| `npx prisma init --datasource-provider sqlite` | Inicializa o Prisma com SQLite |
| `npx prisma migrate dev --name init` | Cria e aplica uma migração |
| `npx prisma generate` | Gera o Prisma Client a partir do schema |
| `npx prisma studio` | Abre interface visual para ver/editar dados |
| `npx prisma db push` | Sincroniza o schema com o banco sem criar migração |

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

### React & Componentes

- **Componentes React** — criação e reutilização (`Btn` com props)
- **`'use client'`** — diretiva para componentes interativos no App Router
- **Server Components vs Client Components** — por padrão, tudo é Server Component no App Router; use `'use client'` apenas quando precisar de hooks ou eventos
- **Renderização condicional** — exibir texto diferente no botão conforme estado (`editandoId ? "Atualizar" : "Cadastrar"`)
- **Renderização de listas** — uso do `.map()` para iterar e renderizar arrays com `key`

### Hooks do React

- **useState** — gerenciamento de estado no client component (formulários, listas)
- **useEffect** — executar efeitos colaterais (ex: carregar dados do banco ao montar o componente)

### Eventos e Formulários

- **Eventos** — `onClick`, `onChange`, `onBlur`, `onSubmit`
- **Controlled Components** — inputs com `value` e `onChange` controlados pelo state
- **`e.preventDefault()`** — impedir o comportamento padrão do formulário (recarregar a página)
- **Campos `readOnly`** — inputs que exibem dados mas não permitem edição manual

### Consumo de API

- **Fetch API** — consumo da API ViaCEP com `async/await`
- **Métodos HTTP** — GET, POST, PUT, DELETE na prática
- **Headers** — uso de `Content-Type: application/json` nas requisições
- **JSON.stringify / response.json()** — serialização e desserialização de dados

### API Routes (Next.js)

- **Route Handlers** — criação de endpoints dentro de `app/api/`
- **NextResponse** — construção de respostas HTTP no servidor
- **Rotas dinâmicas** — uso de `[id]` nos parâmetros da URL para identificar recursos
- **REST API** — implementação de CRUD completo (Create, Read, Update, Delete)

### Banco de Dados & Prisma ORM

- **Schema Prisma** — definição de modelos de dados (`model Usuario {}`)
- **Tipos de campo** — `Int`, `String`, `DateTime` com decorators (`@id`, `@unique`, `@default`)
- **Migrações** — versionamento da estrutura do banco de dados
- **Prisma Client** — `findMany()`, `findUnique()`, `create()`, `update()`, `delete()`
- **Singleton Pattern** — instância única do Prisma Client para evitar múltiplas conexões

### Estilização

- **Bootstrap no Next.js** — importação via `import "bootstrap/dist/css/bootstrap.min.css"`
- **Grid System** — uso de `container`, `row`, `col-6`, `col-md-3` para layout responsivo
- **CSS Modules** — estilos com escopo local (`page.module.css`)
- **CSS Variables** — variáveis CSS para temas claro/escuro

### JavaScript Moderno

- **async/await** — código assíncrono legível
- **Template Literals** — construção de URLs dinâmicas (`` `https://viacep.com.br/ws/${cep}/json/` ``)
- **Destructuring** — desestruturação de objetos (`const { id } = await params`)
- **Operador `||`** — valores fallback (`json.logradouro || ""`)
- **Arrow Functions** — funções inline em eventos (`(e) => setCep(e.target.value)`)
- **Import/Export (ES Modules)** — organização modular do código

---

## Hospedagem Gratuita com Vercel

A [Vercel](https://vercel.com/) é a plataforma criada pelos mesmos desenvolvedores do Next.js. Oferece hospedagem gratuita com:

- Deploy automático ao fazer push no GitHub
- HTTPS gratuito
- Serverless Functions (API Routes funcionam automaticamente)
- Preview deploys para cada Pull Request

### Como fazer deploy na Vercel

1. **Crie uma conta** em [vercel.com](https://vercel.com/) (pode usar conta do GitHub)

2. **Importe o repositório**:
   - Clique em "Add New Project"
   - Conecte sua conta do GitHub
   - Selecione o repositório do projeto

3. **Configure o projeto**:
   - **Root Directory**: `init-app` (importante! pois o Next.js está dentro desta pasta)
   - **Framework Preset**: Next.js (detectado automaticamente)

4. **Variáveis de ambiente**: adicione as variáveis necessárias (ex: `DATABASE_URL`)

5. **Clique em "Deploy"** e aguarde

### Vercel CLI (opcional)

```bash
npm install -g vercel
cd init-app
vercel
```

> **Observação**: O SQLite local **não funciona na Vercel** (o filesystem é read-only em produção). Para deploy, é necessário migrar para um banco de dados na nuvem como **Supabase** ou **Firebase** (veja abaixo).

---

## Banco de Dados Gratuito na Nuvem

Como o SQLite local não funciona em ambientes serverless (Vercel, Netlify), você precisa de um banco na nuvem. Duas ótimas opções gratuitas:

---

### Supabase (PostgreSQL)

[Supabase](https://supabase.com/) é uma alternativa open-source ao Firebase com PostgreSQL.

**Plano gratuito inclui:**
- 500 MB de banco de dados PostgreSQL
- Autenticação ilimitada
- 1 GB de storage para arquivos
- 50.000 requisições de autenticação por mês
- API REST e Realtime automáticos

#### Como integrar Supabase com Prisma no projeto

1. **Crie um projeto** em [supabase.com](https://supabase.com/)

2. **Copie a connection string** em: Project Settings > Database > Connection string > URI

3. **Atualize o `schema.prisma`**:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Usuario {
  id          Int      @id @default(autoincrement())
  nome        String
  email       String   @unique
  senha       String
  dataCriacao DateTime @default(now())
}
```

4. **Configure o `.env`**:

```env
DATABASE_URL="postgresql://postgres:[SUA-SENHA]@db.[REF].supabase.co:5432/postgres"
```

5. **Rode as migrações**:

```bash
npx prisma migrate dev --name supabase-init
npx prisma generate
```

#### Outros serviços do Supabase (sem Prisma)

O Supabase também oferece SDK próprio para usar diretamente:

```bash
npm install @supabase/supabase-js
```

```javascript
// lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default supabase;
```

```javascript
// Exemplo de uso — listar usuários
const { data, error } = await supabase.from("usuarios").select("*");

// Inserir
const { data, error } = await supabase
  .from("usuarios")
  .insert({ nome: "Chico", email: "chico@email.com", senha: "123" });

// Atualizar
const { data, error } = await supabase
  .from("usuarios")
  .update({ nome: "Chico Moedas" })
  .eq("id", 1);

// Deletar
const { data, error } = await supabase
  .from("usuarios")
  .delete()
  .eq("id", 1);
```

---

### Firebase (Firestore / Realtime Database)

[Firebase](https://firebase.google.com/) é a plataforma do Google com banco de dados NoSQL.

**Plano gratuito (Spark) inclui:**
- 1 GiB de armazenamento no Firestore
- 50.000 leituras / 20.000 escritas por dia
- Autenticação gratuita (email, Google, GitHub, etc.)
- 5 GB de hosting
- Cloud Functions (limitado)
- 10 GB de storage para arquivos

#### Como integrar Firebase no projeto

1. **Crie um projeto** em [console.firebase.google.com](https://console.firebase.google.com/)

2. **Ative o Firestore Database** no console

3. **Instale o SDK**:

```bash
npm install firebase
```

4. **Configure o Firebase**:

```javascript
// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```

5. **Exemplo de CRUD com Firestore**:

```javascript
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

// Listar
const querySnapshot = await getDocs(collection(db, "usuarios"));
const usuarios = querySnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
}));

// Criar
await addDoc(collection(db, "usuarios"), {
  nome: "Chico",
  email: "chico@email.com",
  senha: "123",
  dataCriacao: new Date(),
});

// Atualizar
await updateDoc(doc(db, "usuarios", id), {
  nome: "Chico Moedas",
});

// Deletar
await deleteDoc(doc(db, "usuarios", id));
```

---

### Comparativo: Supabase vs Firebase

| Característica | Supabase | Firebase |
|---|---|---|
| **Tipo de banco** | PostgreSQL (relacional) | Firestore (NoSQL / documentos) |
| **Query** | SQL padrão | Métodos do SDK (sem SQL) |
| **Funciona com Prisma** | Sim | Não |
| **Open-source** | Sim | Não |
| **Autenticação** | Sim (gratuita) | Sim (gratuita) |
| **Storage de arquivos** | 1 GB grátis | 5 GB grátis |
| **Realtime** | Sim (WebSockets) | Sim (listeners) |
| **Melhor para** | Quem já conhece SQL | Quem quer começar rápido |

> **Recomendação**: Como o projeto já usa **Prisma**, a migração para **Supabase** é mais simples, pois basta trocar o provider de `sqlite` para `postgresql` e atualizar a connection string.

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
- **Nunca suba o `.env` para o GitHub.** Adicione ao `.gitignore`.
- Use `npx prisma studio` para visualizar e editar dados diretamente no navegador.
- Na Vercel, adicione as variáveis de ambiente em: Project Settings > Environment Variables.

---

## Referências

- [Documentação Next.js](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Bootstrap 5](https://getbootstrap.com/docs/5.3)
- [API ViaCEP](https://viacep.com.br/)
- [Prisma Docs](https://www.prisma.io/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [Vercel Docs](https://vercel.com/docs)
