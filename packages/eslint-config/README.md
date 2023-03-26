# @kinematic-lab/eslint-config <!-- omit in toc -->

`@kinematic-lab/eslint-config` contains the default ESLint configuration for kinematic-labs projects.

<br />

## Table of contents <!-- omit in toc -->

-   [Installation](#installation)
-   [Usage](#usage)
    -   [**`.eslintrc.js`**](#eslintrcjs)
    -   [**`.eslintrc.json`**](#eslintrcjson)

<br />

## Installation

To use `@kinematic-lab/eslint-config` in your project, you must first install it as a dependency. You can do this by running the following command in your terminal:

```shell
$ pnpm i -D @kinematic-lab/eslint-config
```

<br />

## Usage

Once you have installed the package, you can use it by extending it in your ESLint configuration file. See the examples below:

<br />

### **`.eslintrc.js`**

```javascript
module.exports = {
	extends: ['@kinematic-lab'],
	// other configuration
};
```

<br />

### **`.eslintrc.json`**

```javascript
{
	"extends": ["@kinematic-lab"],
	// other configuration
}
```
