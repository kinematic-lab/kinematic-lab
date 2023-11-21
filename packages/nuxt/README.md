# @kinematic-lab/nuxt <!-- omit in toc -->

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

<br />

> [!WARNING]  
> This package is still in alpha. We recommend only using it if you<br />
> want to test it out early, or help develop it.

<br />

## Table of contents <!-- omit in toc -->

-   [Relevant links](#relevant-links)
-   [Installation](#installation)
-   [Composables](#composables)
    -   [General](#general)
    -   [From `@kinematic-lab/core`](#from-kinematic-labcore)

<br />

## Relevant links

See changelogs: [here](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/nuxt/CHANGELOG.md).<br />
See npm: [here](https://www.npmjs.com/package/@kinematic-lab/nuxt).

<br />

## Installation

To use `@kinematic-lab/nuxt` in your project, you must first install it as a dependency. You can do this by running the following command in your terminal:

<br />

```shell
# Using pnpm
$ pnpm i @kinematic-lab/nuxt

# Using npm
$ npm i @kinematic-lab/nuxt

# Using yarn
$ yarn add @kinematic-lab/nuxt
```

<br />

Then add `@kinematic-lab/nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
	modules: ['@kinematic-lab/nuxt'],
});
```

<br />

That's it! You can now use `@kinematic-lab/nuxt` in your Nuxt app ✨

<br />

## Composables

`@kinematic-lab/nuxt` provides the following composables:

### General

-   **onLabUpdate:** [See documentation](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/nuxt/docs/nuxt/on-lab-update.md).
-   **useLabMouse:** [See documentation](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/nuxt/docs/nuxt/use-lab-mouse.md).
-   **useLabViewport:** [See documentation](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/nuxt/docs/nuxt/use-lab-viewport.md).

### From `@kinematic-lab/core`

-   **useLabClock:** [See documentation](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/nuxt/docs/core/use-lab-clock.md).
-   **useLabCubicBezier:** [See documentation](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/nuxt/docs/core/use-lab-cubic-bezier.md).
-   **useLabVector:** [See documentation](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/nuxt/docs/core/use-lab-vector.md).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@kinematic-lab/nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@kinematic-lab/nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/@kinematic-lab/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@kinematic-lab/nuxt
[license-src]: https://img.shields.io/npm/l/@kinematic-lab/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@kinematic-lab/nuxt
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
