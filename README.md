# DeoStore ADMIN DASHBOARD

img

## Sobre

**DeoStore** é um projeto de E-Commerce full stack que combina uma plataforma de E-Commerce com um Dashboard & CMS versátil que permite aos administradores gerenciar catálogos de produtos, categorias, medidas, cores, billboards, pedidos e outros conteúdos de forma fácil e intuitiva. A integração com o Stripe garante um processamento de pagamentos seguro e confiável para os clientes.

O deployment foi realizado com o Vercel e está disponível [aqui](https://deostore-admin.vercel.app).

## Tecnologias

**DeoStore** foi desenvolvido utilizando as seguintes tecnologias:

- Next.js
- React
- Typescript
- Tailwind
- Shadcn-UI
- Prisma
- MySQL
- Stripe
- Clerk
- Cloudinary
- Recharts
- Zustand
- PlanetScale
- React-Hot-Toast
- Lucide-Icons

## Recursos

- O Admin Dashboard serve como CMS, Admin e API, tudo em um só lugar.
- Controle de múltiplos fornecedores / lojas através deste único CMS. Por exemplo, você pode ter uma "Loja de Roupas", uma "Loja de Calçados" e uma "Loja de Jóias", e o CMS irá gerar rotas de API para cada uma delas individualmente.
- Criação, atualização e exclusão de categorias e produtos.
- Criação, atualização e exclusão de filtros, como "Cor" e "Tamanho", e associá-los ao formulário de criação do "Produto".
- Criação, atualização e exclusão de "Billboards", que são grandes banners no topo da página. Eles podem ser associados a uma única categoria ou usados independentemente.
- Upload de várias imagens para os produtos, com a flexibilidade de alterá-las sempre que desejar.
- Pesquisa em todas as categorias, pedidos, produtos, tamanhos, cores e billboards, com paginação inclusa.
- Controle de quais produtos são "destacados" para que apareçam na página inicial do E-commerce.
- Controle de quais produtos são "arquivados" para que não apareçam no E-commerce.
- Visualização de seus pedidos, vendas, entre outros.
- Visualização de gráficos com a receita total e outras métricas importantes.
- Autenticação utilizando o Clerk.
- Criação de pedidos.
- Finalização de compras com integração do Stripe e uso de webhooks para comunicação com o sistema.
- Utilização de MySQL, Prisma e PlanetScale para gerenciamento eficiente do banco de dados.

## Instalação

```shell
git clone https://github.com/Sellucas/deostore-admin.git

cd deostore-admin

npm i
```

### Configuração arquivo .env

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Conectar ao PlanetScale e fazer Push com o Prisma

```shell
npx prisma generate
npx prisma db push
```

### Iniciar o app

```shell
npm run dev
```

### Comandos disponíveis

Executando comandos com o npm `npm run [comando]`

comando   | descrição
--------- | ------
`dev`  | Inicia uma instância de desenvolvimento do app

### Estrutura de Diretórios

```
├── . . .
├── actions
├── app
    ├── (auth)
    ├── (dashboard)
    ├── (root)
    ├── api
    ├── . . .
    └── layout.ts
├── components
├── hooks
├── lib
├── . . .
├── prisma
├── providers
├── public
└── . . .    
```

## Contato

- LinkedIn: [in/lucas-sell-machado](https://www.linkedin.com/in/lucas-sell-machado/)
- Portfólio: [portfolio-sellucas.app](https://portfolio-sellucas.vercel.app)
- Email: <lucassellmachado@gmail.com>