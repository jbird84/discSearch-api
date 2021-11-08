# DiscIt

A RESTful API for disc golf discs. Enables developers to programatically access publicly accessible disc golf disc information (name, brand, category, flight numbers, etc.).

---

## Technologies

- TypeScript
- TypeORM
- Express
- PostgreSQL

---

## Local Setup

Install prerequisites:

- [Node.js](https://nodejs.org/en/download/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) (plus [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-manual) if on Windows)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Yarn](https://classic.yarnpkg.com/en/) (`npm i -g yarn`)

Set up dev environment:

- Clone repo and open root folder in VS Code.
- Install recommended VSCode extensions `Docker` and `ESLint`.
- Run `yarn install` to install package dependencies.
- Create and populate a `.env` file in the root folder based on the `.env.template` file.

Set up local dev database:

- Open Docker Desktop and leave it running in the background.
- In VS Code, right-click on `discit-dev-container\docker-compose.yml` and select `Compose Up`.
- Run `yarn db:up` to execute the default database migration checked into source control.
  - If schema changes are subsequently made, run `yarn db:create` to generate a new migration and `yarn db:up` to execute it.

Launch:

- Run `yarn start` to start the server. Disc data will be loaded into the database if none already exists.
  - Alternatively, run the `debug` launch configuration in VS Code (press `F5`).
