# @kinematic-lab/typescript-config <!-- omit in toc -->

The `@kinematic-lab/typescript-config` contains the default TypeScript configuration for kinematic-labs projects.

<br />

## Table of contents <!-- omit in toc -->

-   [Installation](#installation)
-   [Usage](#usage)

<br />

## Installation

To use `@kinematic-lab/typescript-config` in your project, you must first install it as a dependency. You can do this by running the following command in your terminal:

```shell
$ pnpm i -D @kinematic-lab/typescript-config
```

<br />

## Usage

Once you have installed the package, you can use it by extending it in your `tsconfig.json` file. See the examples below:

```json
{
	"extends": "@kinematic-lab/typescript-config/core.json"
	// other configuration
}
```
