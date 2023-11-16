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
> This package is still in alpha. We recommend only using it if you
> want to test it out early, or help developing it.

<br />

## Quick Setup

1. Add `@kinematic-lab/nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D @kinematic-lab/nuxt

# Using yarn
yarn add --dev @kinematic-lab/nuxt

# Using npm
npm install --save-dev @kinematic-lab/nuxt
```

2. Add `@kinematic-lab/nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
	modules: ['@kinematic-lab/nuxt'],
});
```

That's it! You can now use `@kinematic-lab/nuxt` in your Nuxt app ✨

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@kinematic-lab/nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@kinematic-lab/nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/@kinematic-lab/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@kinematic-lab/nuxt
[license-src]: https://img.shields.io/npm/l/@kinematic-lab/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@kinematic-lab/nuxt
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
