
# Projeto API de Recargas Telefônicas

## 📌 Descrição

Este projeto consiste em uma **API RESTful** desenvolvida em **TypeScript** para gerenciar clientes, telefones e recargas.  
A aplicação segue a **arquitetura em camadas** (routers, controllers, services e repositories), utiliza **PostgreSQL** como banco de dados e inclui validação de dados e tratamento de erros.  

O projeto está versionado no GitHub e pronto para deploy na nuvem.

---

## 🌐 Deploy

O backend está disponível na nuvem:

[Aplicação Deploy](https://driven-recharge-1.onrender.com)

---

## 🛠 Tecnologias

- **TypeScript**  
- **Node.js**  
- **Express**  
- **PostgreSQL**  
- **Joi** (validação de schemas)  
- **dotenv** (variáveis de ambiente)  
- **Render** (deploy do backend e banco de dados)

---

## 📂 Estrutura do Projeto

```
project/
│
├─ src/
│  ├─ controllers/
│  ├─ services/
│  ├─ repositories/
│  ├─ routers/
│  ├─ protocols/      # Tipos TypeScript e Utility Types
│  └─ middlewares/    # Validação e tratamento de erros
│
├─ sql/
│  └─ create-tables.sql
│
├─ .env
├─ .gitignore
├─ package.json
├─ package-lock.json
└─ README.md
```

---

## 🔧 Configuração do Projeto

1. Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo `.env`:
```env
DATABASE_URL=postgresql://drivenrecharge_7ykj_user:FRwXV66xI7dwnWqLD8eN2P6yPwE9pwP2@dpg-d3skrp2li9vc73altbag-a.oregon-postgres.render.com/drivenrecharge_7ykj
PORT=5000
```

4. Crie o banco de dados e tabelas:
```bash
CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);
```

5. Inicie a aplicação:
```bash
npm run dev
```

---

## 📌 Funcionalidades da API

### Clientes
- Cadastro de clientes

### Telefones `/phones`
- Cadastro de telefones
- Listagem dos telefones de um cliente via documento:  
  `GET /phones/:document`

### Recargas `/recharges`
- Efetuar recarga de um telefone
- Listagem das recargas de um número:  
  `GET /recharges/:number`

### Consolidado `/summary/:document`
- Retorna todos os números de um cliente e suas respectivas recargas usando o documento como parâmetro
---

## 📝 Validação e Tratamento de Erros

- Todos os endpoints `POST` e `PUT` utilizam um **middleware de validação** com **Joi**  
- Retorno de **status 422 (Unprocessable Entity)** quando os dados não seguem o formato esperado  
- Middleware único para tratamento de erros em toda a aplicação
---


