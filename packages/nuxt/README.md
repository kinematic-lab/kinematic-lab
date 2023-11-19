<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: @kinematic-lab/nuxt
- Package name: @kinematic-lab/nuxt
- Description: My new Nuxt module
-->

# @kinematic-lab/nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

<br />

> [!WARNING]  
> This package is still in alpha. We recommend only using it if you<br />
> want to test it out early, or help develop it.

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

### onUpdate

Missing documention.

### useMouse

Missing documention.

### useDimensions

Missing documention.

### useClock

Functions the same way as `Clock` from `@kinematic-lab/core`.<br />
See documentation from `core`: [here](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/core/docs/lab-clock.md).

### useCubicBezier

Functions the same way as `CubicBezier` from `@kinematic-lab/core`.<br />
See documentation from `core`: [here](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/core/docs/lab-cubic-bezier.md).

### useVector

Functions the same way as `Vector` from `@kinematic-lab/core`, but returns a reactive object.<br />
See documentation from `core`: [here](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/core/docs/lab-vector.md).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@kinematic-lab/nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@kinematic-lab/nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/@kinematic-lab/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@kinematic-lab/nuxt
[license-src]: https://img.shields.io/npm/l/@kinematic-lab/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@kinematic-lab/nuxt
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
