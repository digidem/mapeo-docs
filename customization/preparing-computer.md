# Preparing Computer

## Prepare Computer for Packaging the Categories

_Time it takes: \(5-10 min\)_

This is a one time process for every computer. We will need to iinstall nvm, npm, and homebrew. If you've already done this, skip this section.

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

