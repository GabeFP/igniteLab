## igniteLab
- Foi utilizado para criar o app: nest new notification-service
- Utilizado o gerenciador de pacotes npm
- Crie em uma pasta legal e de fácil acesso
- Para criar o BD foi utilizado: npx prisma init --datasource-provider SQLite
- Para rodar o banco: npx prisma studio

#### Rodar o app
- npm run start:dev
- Está rodando na porta 3000
- http://localhost:3000/

#### Install Nestjs
- npm i -g @nestjs/cli

#### Install Prisma
- npm i prisma -D
- npm i @prisma/client

#### Criando tabela com Prisma
- npx prisma migrate dev
