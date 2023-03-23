# **Frontend Mono-repo** <!-- omit in toc -->

Eveything frontend-related within the local project, contained within a single mono-repo.<br />
Read the following sections before getting started working on the project.<br />

<br />

## **Table of contents** <!-- omit in toc -->

-   [**Relevant Information**](#relevant-information)
    -   [**Contact**](#contact)
    -   [**Relevant links**](#relevant-links)
-   [**Conventions**](#conventions)
    -   [**Branching Strategy - Features**](#branching-strategy---features)
    -   [**Branching Strategy - Hotfixes**](#branching-strategy---hotfixes)
    -   [**Conventional Commits**](#conventional-commits)
-   [**Getting started**](#getting-started)
    -   [**Preperations**](#preperations)
    -   [**Adding apps**](#adding-apps)
    -   [**Adding packages**](#adding-packages)

<br />

## **Relevant Information**

<br />

### **Contact**

Frontend-lead: @AskeLange<br />
Design-lead: @AskeLange

<br />

### **Relevant links**

Design: [missing link]().
Hosting: [missing link]().
Frontend / Stage: [missing link]().
Frontend / Live: [missing link]().

<br />

## **Conventions**

<br />

### **Branching Strategy - Features**

-   Create an issue from one of the existing templates.
-   Create a branch from `dev` with the naming-convention: `${issue-number}-${issue-name}`.
-   Implement the changes on this branch.
-   Create a pull-request to `dev` and have at least one other person accept the review.
-   Merge `dev` into `main`.

<br />

### **Branching Strategy - Hotfixes**

-   Switch to the `main` branch.
-   Implement the changes on this branch.
-   Commit your changes.
-   Merge `main` back into `dev`.

<br />

### **Conventional Commits**

<br />

All commit messages should follow the [conventional commits standard](https://www.conventionalcommits.org/en/v1.0.0/).<br />
Meaning that they should follow the pattern: `type(scope): subject`.

**Type**: Often either `chore`, `fix` or `feat`, see above link for full list.<br />
**Scope**: The package or app where the changes have been implemented.<br />
**Subject**: Commit description.

<br />

## **Getting started**

<br />

### **Preperations**

Get started by running the command below, which installs dependecies across all workspaces and prepares Husky.

```bash
$ > pnpm install
```

<br />

Thereafter you can run the commands below to lint the code and run it in development mode.

```bash
$ > pnpm run lint
$ > pnpm run dev
```

<br />

### **Adding apps**

To add a new app, start by running the command below and select `app`:

```bash
$ > pnpm run new
```

<br />

This will prompt you for:<br />

-   _Name_: Directory and package name for the application.

<br />

And will generate the structure below in _./apps_.<br />
Note the files within sub-directories are not shown.

```
📦 appName
 ┣ 📂 assets
 ┣ 📂 components
 ┣ 📂 layouts
 ┣ 📂 middleware
 ┣ 📂 pages
 ┣ 📂 plugins
 ┣ 📂 static
 ┣ 📂 store
 ┣ 📜 README.md
 ┣ 📜 eslintignore.hbs
 ┣ 📜 jsconfig.json
 ┣ 📜 nuxt.config.js
 ┣ 📜 package.json
 ┗ 📜 tailwind.config.js
```

<br />

### **Adding packages**

To add a new package, start by running the command below and select `package`:

```bash
$ > pnpm run new
```

<br />

This will prompt you for:<br />

-   _Name_: Directory and package name for the application, will be prefixed with type.
-   _Type_: Whether to create a JavaScript or Vue package.

<br />

And will generate the structure below in _./packages_.<br />
Note the components directory is not present on packages of type `js`.

```
📦 type-packageName
 ┣ 📂 components
 ┃ ┣ 📜 ExampleComponent.vue
 ┃ ┗ 📜 index.js
 ┣ 📜 main.js
 ┗ 📜 package.json
```

<br />
