# @kinematic-lab/typescript-config <!-- omit in toc -->

The `@kinematic-lab/typescript-config` contains the default TypeScript configuration for kinematic-labs projects.

<br />

## Table of contents <!-- omit in toc -->

-   [Relevant links](#relevant-links)
-   [Installation](#installation)
    -   [Using PNPM](#using-pnpm)
    -   [Using NPM](#using-npm)
    -   [Using Yarn](#using-yarn)
-   [Usage](#usage)

<br />

## Relevant links

See changelogs: [here](https://github.com/kinematic-lab/core/blob/main/packages/typescript-config/CHANGELOG.md).<br />
See npm: [here](https://www.npmjs.com/package/@kinematic-lab/typescript-config).

<br />

## Installation

To use `@kinematic-lab/typescript-config` in your project, you must first install it as a dependency. You can do this by running the following command in your terminal:

<br />

### Using PNPM

```shell
$ pnpm i @kinematic-lab/typescript-config
```

<br />

### Using NPM

```shell
$ npm i @kinematic-lab/typescript-config
```

<br />

### Using Yarn

```shell
$ yarn add @kinematic-lab/typescript-config
```

<br />

## Usage

Once you have installed the package, you can use it by extending it in your `tsconfig.json` file. See the examples below:

```javascript
{
	"extends": "@kinematic-lab/typescript-config/core.json"
	// other configuration
}
```
