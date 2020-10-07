<p align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</p>

<h1 align="center">
  Aplicação GoBarber
</h1>

<p align="center">Backend para agendamento de serviços de beleza.  :haircut:</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-191A1E">

  <a href="https://www.linkedin.com/in/renansmoliveira/">
    <img alt="Follow me Linkedin" src="https://img.shields.io/badge/Follow%20up-renansmoliveira-191A1E?style=social&logo=linkedin">
  </a>
</p>

## :rocket: Sobre o desafio

API GoBarber, aplicação que conecta prestadores de serviço (Barbeiros e Cabeleireiros) aos clientes em suas regiões. Aplicação montada durante o bootcamp GoStack aplicando todo o conhecimento adquirido durante a jornada. Neste projeto foi utilizada as melhores práticas na construção do projeto, com o uso das tecnologias TypeScript, Express, TypeORM em cima do Ambiente e execução de javascript, o NodeJS.

## :pushpin: Um pouco sobre as ferramentas

### Back-End

- [TypeScript](https://www.typescriptlang.org/): Linguagem.
- [NodeJs](https://nodejs.org/en/): Ambiente de Execução.
- [Express](https://expressjs.com/): API Framework.
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken): Autenticação JWT.
- [Multer](https://github.com/expressjs/multer): Upload de Arquivos.
- [Postgres](https://www.postgresql.org/): Banco de Dados.
- [TypeORM](https://typeorm.io/#/): ORM.
- [Eslint](https://eslint.org/): Padronização de código.
- [Jest](https://jestjs.io/): Testes.
- [tsyringe](https://github.com/microsoft/tsyringe): Lib de injeção de dependencias.
- [uuidv4](https://github.com/thenativeweb/uuidv4#readme): uuid.
- [NodeMailer](https://nodemailer.com/about/): Módulo de envio de emails.
- [MongoDB](https://www.mongodb.com/): Banco de dados orientado a documentos.
- [Ethereal Mail](https://ethereal.email/): Serviço de Email para desenvolvimento.
- [AWS-SES](https://aws.amazon.com/pt/ses/): Serviço de Email para produção.
- [AWS-S3](https://aws.amazon.com/pt/s3/): Armazenamento de Arquivos.
- [Redis](https://redis.io/): Banco de dados utilizado como Cache para aplicação.
- [Rate Limiter Flexible](https://github.com/animir/node-rate-limiter-flexible): Lib de proteção a DDoS.

### **Em Desenvolvimento...**

## :computer: Instalação e execução

Utilizando docker, dê os comandos de criação dos bancos, PostgreSQL, MongoDB e Redis, respectivamente:

```
$ docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
$ docker run --name mongodb -p 27017:27017 -d -t mongo
$ docker run --name redis -p 6379:6379 -d -t redis:alpine
```

Conecte-se ao container gostack_postgres e crie um banco de dados chamado gostack_gobarber. Em caso de alteração do banco de dados ou senha, vá para o [Arquivo de configuração do TypeORM](ormconfig.json) e altere as informações desejadas.

```
$ cd /backend
$ yarn
$ yarn typeorm migration:run
$ yarn dev:server
```

A aplicação estará rodando no http://localhost:3333.

Para testar as rotas, utilize esse arquivo [Insomnia](Insomnia_2020-10-07)

##Testes

Para rodar os testes feitos com o Jest basta dar o seguinte comando dentro da pasta /backend:

```
$ yarn test
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/lmaoclost/GoBarber/blob/master/LICENSE.md) para mais detalhes.

---

Made with :heartpulse: by [Renan Oliveira](https://github.com/lmaoclost)
