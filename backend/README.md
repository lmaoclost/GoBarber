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
- [Express](https://expressjs.com/): API Framework
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken): Autenticação JWT
- [Multer](https://github.com/expressjs/multer): Upload de Arquivos
- [Postgres](https://www.postgresql.org/): Banco de Dados
- [TypeORM](https://typeorm.io/#/): ORM
- [Eslint](https://eslint.org/): Padronização de código
- [Jest](https://jestjs.io/): Testes
- [tsyringe](https://github.com/microsoft/tsyringe): Lib de injeção de dependencias.
- [uuidv4](https://github.com/thenativeweb/uuidv4#readme): uuid.

### **Em Desenvolvimento...**

## :computer: Instalação e execução

Crie um BD PostgreSQL com o nome: gostack_gobarber

```
$ cd /backend
$ yarn
$ yarn typeorm migration:run
$ yarn dev:server
```

A aplicação estará rodando no localhost:3333

Para testar as rotas, utilize esse arquivo [Insomnia](Insomnia_2020-09-17)

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/lmaoclost/GoBarber/blob/master/LICENSE.md) para mais detalhes.

---

Made with :heartpulse: by [Renan Oliveira](https://github.com/lmaoclost)
