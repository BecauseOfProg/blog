<div align="center">
  <img src="https://becauseofprog.fr/assets/v2/sites/becauseofprog.fr/assets/logos/bop.svg" width="200" />
  <h1>BecauseOfProg's blog</h1>
  <a href="https://becauseofprog.fr">Website</a> &mdash; <a href="https://dev.becauseofprog.fr">Dev website</a> &mdash; <a href="https://trello.com/b/4ef4jlfC/blog-v3">Trello</a> &mdash; <a href="https://discord.becauseofprog.fr">Discord</a><br>
  <a href="https://app.netlify.com/sites/becauseofprog-dev/deploys">
    <img src="https://api.netlify.com/api/v1/badges/bc059206-9f7c-4906-9692-9d582aeadb61/deploy-status" alt="Netlify status"
  </a>
  <a href="https://discord.becauseofprog.fr">
    <img src="https://img.shields.io/discord/272454426038370304?color=blue&label=discord" alt="Chat on Discord">
  </a>
  <a href="https://github.com/BecauseOfProg/blog/issues">
    <img src="https://img.shields.io/github/issues/BecauseOfProg/blog" alt="Open issues">
  </a>
  <a href="https://github.com/BecauseOfProg/blog/releases">
    <img src="https://img.shields.io/github/v/release/BecauseOfProg/blog" alt="Latest release">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/github/license/BecauseOfProg/blog" alt="License">
  </a>
</div>

- [💻 Development](#-development)
  - [Environment setup](#environment-setup)
  - [Building the app](#building-the-app)
  - [Linting and fixing files](#linting-and-fixing-files)
  - [Customizing configuration](#customizing-configuration)
- [📜 Credits](#-credits)
- [🔐 License](#-license)

## 💻 Development

### Environment setup

Thank you for being interested in helping our blog to grow by expanding its code !
First, clone the repository from GitHub on your local machine : (this requires Git to be installed)

```bash
git clone https://github.com/BecauseOfProg/blog.git  # Using HTTP
git clone git@github.com:BecauseOfProg/blog          # Using SSH
```

Install the required dependencies using your favorite package manager :

```bash
npm i         # Using NPM
yarn  # Using Yarn
```

Then, run the application using the `dev` command :

```bash
npm run dev  # Using NPM
yarn dev     # Using Yarn
```

A web server will start with hot reload enabled, perfect to develop.

### Building the app

To get a built version of the blog ready to be served by an HTTP server, use the `build` command :

```bash
npm run build  # Using NPM
yarn build     # Using Yarn
```

Files will be generated in the `dist` folder, and the entry point will be the `index.html` file.

### Customizing configuration

If you want to customize the build configuration, check the [Configuration Reference](https://vitejs.dev/guide/) on the Vite documentation.

## 📜 Credits

- Libraries : [VueJS](https://vuejs.org), [Vuetify](https://vuetifyjs.com)
- Website design : [Gildas GH](https://github.com/Gildas-GH)
- Maintainers : [Théo Vidal](https://github.com/theovidal), [Noéwen (kernoeb)](https://github.com/kernoeb)

## 🔐 License

Copyright (C) 2021  BecauseOfProg

Project under the [GNU GPL v3](./LICENSE) license.
