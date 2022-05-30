How to initialize a project:

-   nest new <name> [options]

--dry-run -- without real changes
--skip-git -- without git repo
--skip-install -- without installing dependencies
--package-manger -- npm/yarn
--language -- TS/JS

How to create a component:

-   nest generate <schematic> <name> [options]
-   nest g s <name> [options]

--dry-run -- without real changes
--project -- choosing project for monorepo
--flat -- without creating nested directory

How to build a project:

-   nest build [options]

--path -- path for tsconfig.json
--config -- path for nest-cli.json
--watch -- rebuild after any changes
--webpack -- use webpack
--webpackPath -- path for webpack
--tsc -- force ts compiler

How to launch a project:

-   nest start [options]

--preserveWatchOutput -- do not clear console after build
--watchAssets -- watch not only for ts assets
--debug -- debug mode (breakpoints, memory and process usage analysis)
--exec -- path for bin node file
