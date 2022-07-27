# Apollo Nuxt Module

[![npm version](https://badge.fury.io/js/%40hrwg%2Fapollo-nuxt.svg)](https://badge.fury.io/js/%40hrwg%2Fapollo-nuxt)

This module integrates [Apollo GraphQL for Vue](https://v4.apollo.vuejs.org/) with [Nuxt 3](https://v3.nuxtjs.org/).

>
> **Please note**
> 
> Since `@vue/apollo-composable` is still in alpha and this module
> depends on it, caution is advised, since future changes may occur
> that break the functionality or compatibility of this module.

## Features
- Creation and injection of an Apollo GraphQL client into a Nuxt 3 app
- Functional on server- and client-side
- Enables use of [@vue/apollo-composable](https://v4.apollo.vuejs.org/guide-composable/query.html#executing-a-query)

## Current Limitations
- Only configuration is the `uri` of the GraphQL endpoint
- Due to `@vue/apollo-composable` being in alpha, breaking changes may occur in the future

## Installation
The module can be installed by running the following command:

```sh
npm i @hrwg/apollo-nuxt
```

It is activated and configured, by adding it to the `nuxt.config.ts`.

```ts
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
    modules: [
        '@hrwg/apollo-nuxt',
    ],
    apolloNuxt: {
        uri: 'http://localhost:3000/api/graphql',
    },
});
```

The configuration parameter `uri` is the GraphQL endpoint.

## Usage
After installation, GraphQL queries can be executed according to the [Vue Apollo Documentation](https://v4.apollo.vuejs.org/guide-composable/query.html#executing-a-query).

For a simple example, refer to the [Playground Project](playground).

## Development
- Run `npm i` to install dependencies.
- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.

## Changelog
This project adheres to [Semantic Versioning](https://semver.org/).
Please refer to the [CHANGELOG.md](CHANGELOG.md) for detailed changes and
migration instructions.

## License
MIT
