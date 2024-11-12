# front-end-test

- Name: Egon Dehandschutter
- E-mailadres: <mailto:egon.dehandschutter@gmail.com>

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

## Opstarten

Voor dat de front-end kan werken, moet ook de webservice draaien. Meer informatie kan gevonden worden in de README van de webservice op github: https://github.com/egondehandschutter/back-end-test.git.

- Maak een `.env` met de volgende informatie en pas het toe aan uw configuratie:

```dotenv
VITE_API_URL=http://localhost:9000/api
```

- Installeer alle dependencies:

```bash
yarn install
```

- Applicatie starten, het draait automatisch op poort <http://localhost:5137>:

```bash
yarn dev
```
