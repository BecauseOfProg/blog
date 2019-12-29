<div align="center">
  <img src="https://cdn.becauseofprog.fr/v2/sites/becauseofprog.fr/assets/logos/bop.svg" width="200" />
  <h1>BecauseOfProg's blog</h1>
  <h3>Our blog about informatic and digital</h3>
  <a href="https://becauseofprog.fr">https://becauseofprog.fr</a>
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
First of all, clone the repository from GitHub on your local machine : (this requires Git to be installed)

```bash
git clone https://github.com/BecauseOfProg/blog.git  # Using HTTP
git clone git@github.com:BecauseOfProg/blog          # Using SSH
```

Install the required dependencies using your favorite package manager :

```bash
npm i         # Using NPM
yarn install  # Using Yarn
```

Then, run the application using the `serve` command : (Make sure you installed Vue CLI on your system)

```bash
npm run serve  # Using NPM
yarn serve     # Using Yarn
```

A web server will start with hot reload enabled, perfect to develop.

### Building the app

To get a built version of the blog ready to be served by a HTTP server, use the `build` command :

```bash
npm run build  # Using NPM
yarn build     # Using Yarn
```

Files will be generated in the `dist` folder, and the entry point will be the `index.html` file.

### Linting and fixing files

To lint the files and check for formatting, run the `lint` command :

```bash
npm run lint  # Using NPM
yarn lint     # Using Yarn
```

If a better formatting is available, new code will be written directly inside the concerned files.

### Customizing configuration

If you want to customize the build configuration, check the [Configuration Reference](https://cli.vuejs.org/config/) on the Vue CLI documentation.

## 📜 Credits

- Libraries : [VueJS](https://vuejs.org), [Vuetify](https://vuetifyjs.com)
- Website design : [Gildas GH](https://github.com/Gildas-GH)
- Maintainer : [Exybore](https://github.com/exybore)

## 🔐 License

Copyright (C) 2019  BecauseOfProg

Project under the [GNU GPL v3](./LICENSE) license.
