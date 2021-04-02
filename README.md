# Ratatouille-Burger API- Back-end

## Índice

* [1. Introdução](#1-introducao)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Futuras melhorias](#3-futuras-melhorias)

## 1. Introdução

O front-end da aplicação Ratatouille-Burger já está criado, agora precisamos de um back-end para manipulação CRUD dos dados.

O back-end será feito através de uma API rest que será compatível com as requisições vindas do front.

## 2. Resumo do projeto
Este projeto foi dedicado para realizar o back-end da Ratatouille-Burger, onde foi feita com [Node.js](https://nodejs.org/) utilizando o framework [Express](https://expressjs.com/). 
O gerenciador de banco de dados utilizado foi o [PostgreSQL](https://www.postgresql.org/docs/) por meio do [Sequelize](https://sequelize.org).

Foi utilizado o [insomnia](https://insomnia.rest/) para fazer os testes de requisição e o deploy foi feito no [Heroku](https://www.heroku.com/home) e pode ser acessado [aqui](https://bq-ratatoille.herokuapp.com/).

Os endpoints disponíveis são:

#### `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

#### `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

#### `/orders`

* `GET /orders`
* `GET /orders/:orderId`
* `POST /orders`
* `PUT /orders/:orderId`
* `DELETE /orders/:orderId`



## 3. Futuras melhorias

* [ ] `POST /auth`)
* [ ] Middleware de autenticação
* [ ] Middleware de erros
* [ ] Documentação da API
* [ ] Testes unitários
* [ ] Testes _e2e_
* [ ] Docker

