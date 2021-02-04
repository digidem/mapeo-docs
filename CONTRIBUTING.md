# Mapeo Docs

## Usage

Make sure you have NodeJS installed. If not follow the instructions on the [Preparing computer section](./customization/preparing-computer.md) to install it.

Install Gitbook-cli:

```sh
npm i -g gitbook-cli
```

Then install the Gitbook plugins:

```sh
gitbook install
```

And start a Gitbook development server:

```sh
gitbook serve
```

The Gitbook page should be available at `http://localhost:4000` and will auto-reload whenever changes are made to any files.

Use `gitbook build` to generate the static files on the `_book` directory.