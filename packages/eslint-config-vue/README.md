# @kinematic-lab/eslint-config-vue <!-- omit in toc -->

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

`@kinematic-lab/eslint-config-vue` contains the default Vue3 ESLint configuration for kinematic-labs projects.

<br />

## Table of contents <!-- omit in toc -->

-   [Relevant links](#relevant-links)
-   [Installation](#installation)
    -   [Using PNPM](#using-pnpm)
    -   [Using NPM](#using-npm)
    -   [Using Yarn](#using-yarn)
-   [Usage](#usage)
    -   [`.eslintrc.js`](#eslintrcjs)
    -   [`.eslintrc.json`](#eslintrcjson)

<br />

## Relevant links

See changelogs: [Here](https://github.com/kinematic-lab/kinematic-lab/blob/main/packages/eslint-config-vue/CHANGELOG.md).<br />
See npm: [here](https://www.npmjs.com/package/@kinematic-lab/eslint-config-vue).

<br />

## Installation

To use `@kinematic-lab/eslint-config-vue` in your project, you must first install it as a dependency. You can do this by running the following command in your terminal:

<br />

### Using PNPM

```shell
$ pnpm i @kinematic-lab/eslint-config-vue -D
```

<br />

### Using NPM

```shell
$ npm i @kinematic-lab/eslint-config-vue -D
```

<br />

### Using Yarn

```shell
$ yarn add @kinematic-lab/eslint-config-vue --dev
```

<br />

## Usage

Once you have installed the package, you can use it by extending it in your ESLint configuration file. See the examples below:

<br />

### `.eslintrc.js`

```javascript
module.exports = {
	extends: ['@kinematic-lab/eslint-config-vue'],
	// other configuration
};
```

<br />

### `.eslintrc.json`

```javascript
{
	"extends": ["@kinematic-lab/eslint-config-vue"],
	// other configuration
}
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@kinematic-lab/eslint-config-vue/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@kinematic-lab/eslint-config-vue
[npm-downloads-src]: https://img.shields.io/npm/dm/@kinematic-lab/eslint-config-vue.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@kinematic-lab/eslint-config-vue
[license-src]: https://img.shields.io/npm/l/@kinematic-lab/eslint-config-vue.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@kinematic-lab/eslint-config-vue
