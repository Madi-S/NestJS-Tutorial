# Theory

## Types of testing:

-   e2e (testing whole system via api or browser) using jest, mocha, chai | cypress, protractor, selenium; `npm run test:e2e`

-   integration (testing integration between 2 components: external api, database via pipelines or mounting several instances of microservices) using jest, mocha, chai

-   unit (testing isolated functions or classes using mock data) using jest, mocha, chai

## Debugging:

- `clinic doctor --on-port 'autocannon localhost:$PORT/api/review/byProduct/123234234234234sdfsdf' -- node dist/main.js`

- `autocannon http://localhost:3000/api/review/byProduct/123`

# Nest.js-cli commands

## How to initialize a project:

-   `nest new <name> [options]`

`--dry-run` -- without real changes

`--skip-git` -- without git repo

`--skip-install` -- without installing dependencies

`--package-manger` -- npm/yarn

`--language` -- TS/JS

## Useful commands:

`nest g module <MODULE_NAME>` -- create a new module

`nest g class <MODULE_name>/<MODEL_NAME>.model` -- create a new model

`nest g controller <CONTROLLER_NAME>` -- create a controller

## How to create a component:

-   `nest generate <schematic> <name> [options]`
-   `nest g s <name> [options]`

`--dry-run` -- without real changes

`--project` -- choosing project for monorepo

`--flat` -- without creating nested directory

## How to build a project:

-   `nest build [options]`

`--path` -- path for tsconfig.json

`--config` -- path for nest-cli.json

`--watch` -- rebuild after any changes

`--webpack` -- use webpack

`--webpackPath` -- path for webpack

`--tsc` -- force ts compiler

## How to launch a project:

-   `nest start [options]`

`--preserveWatchOutput` -- do not clear console after build

`--watchAssets` -- watch not only for ts assets

`--debug` -- debug mode (breakpoints, memory and process usage analysis)

`--exec` -- path for bin node file

## TSConfig rules:

-   "strict": true -- noImplicitAny and strictNullChecks
