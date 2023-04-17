# @kinematic-lab/eslint-config-typescript <!-- omit in toc -->

`@kinematic-lab/eslint-config-typescript` contains the default TypeScript ESLint configuration for kinematic-labs projects.

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

See changelogs: [Here](https://github.com/kinematic-lab/core/blob/main/packages/eslint-config-typescript/CHANGELOG.md).<br />
See npm: [here](https://www.npmjs.com/package/@kinematic-lab/eslint-config-typescript).

<br />

## Installation

To use `@kinematic-lab/eslint-config-typescript` in your project, you must first install it as a dependency. You can do this by running the following command in your terminal:

<br />

### Using PNPM

```shell
$ pnpm i @kinematic-lab/eslint-config-typescript -D
```

<br />

### Using NPM

```shell
$ npm i @kinematic-lab/eslint-config-typescript -D
```

<br />

### Using Yarn

```shell
$ yarn add @kinematic-lab/eslint-config-typescript --dev
```

<br />

## Usage

Once you have installed the package, you can use it by extending it in your ESLint configuration file. See the examples below:

<br />

### `.eslintrc.js`

```javascript
module.exports = {
	extends: ['@kinematic-lab/eslint-config-typescript'],
	// other configuration
};
```

<br />

### `.eslintrc.json`

```javascript
{
	"extends": ["@kinematic-lab/eslint-config-typescript"],
	// other configuration
}
```
