# front-end-test

- Name: Egon Dehandschutter
- E-mailadres: <mailto:egon.dehandschutter@gmail.com>

## requirements

I expect that the following software is already installed:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

## Startup

Before the front-end is started, the back-end must be started. More information can be found in the README of the back-end on github: https://github.com/egondehandschutter/back-end-test.git.

- make a `.env` with the following information and add it to your configuration:

```dotenv
VITE_API_URL=http://localhost:9000/api
```

- Install all dependencies:

```bash
yarn install
```

- Start application, it automatically runs on port <http://localhost:5137>:

```bash
yarn dev
```
