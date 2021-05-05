# Preparing Computer

## Prepare Computer for Packaging the Categories

Mapeo is built with JavaScript programming language. To get started, you'll need to install[ Node.js ](https://nodejs.org)development environment.. If you already have Node.js installed you can skip this section.

You need to be at least on Node.js version 8 \(or higher\) for the mapeo-settings-builder to work properly. Head over to [Node.js download](https://nodejs.org/en/download/) page and select installer for your operating system.

Alternatively you can also use NVM \(Node Version Manager\) to install and manage multiple versions of Node.js on your computer.

### Install nvm

```text
touch ~/.bash_profile
```

```text
curl -o- <https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh> | bash
```

Then close terminal and open again

### Install homebrew \(macOS\)

[http://brew.sh/](http://brew.sh/)

### Install npm

[https://docs.npmjs.com/cli/install](https://docs.npmjs.com/cli/install)

### Install and use node 12

```text
nvm install 12
nvm alias default 12
```

### Install Mapeo Settings Builder

You'll see output on the terminal, but this is OK

```text
npm install -g mapeo-settings-builder
```

## Is your computer ready?

If your computer is ready to create configurations, type

```text
mapeo-settings-builder
```

You should see output that looks something like

```text
→ Using version x.x.x of mapeo-settings-builder
Usage: mapeo-settings-builder [options] [command]

Options:
  -h, --help                   display help for command

Commands:
  build [options] [sourceDir]  Build config from presets in current working dir
  lint [sourceDir]             Lint preset files for errors
  extract-messages [options]   Extract messages for translation
  generate-key                 Generate a random project key
  help [command]               display help for command

```

Now you're ready to move to putting your icons and questions together!

