# Authoring Configurations

## Prepare folder structure for creating assets

_Time it takes: \(5min\)_

### Using the file explorer

1. Download the [example configuration](https://github.com/digidem/mapeo-default-settings/).
2. Unzip the contents to a new folder using a program like [7zip](https://www.7-zip.org/).
3. Rename the folder from "mapeo-default-settings-2.1.0" to "mapeo-config-projectname".

### Using the terminal \(linux and mac\)

```text
wget https://github.com/digidem/mapeo-default-settings/archive/v2.1.0.zip 
unzip v2.1.0.zip 
mv mapeo-default-settings-v2.1.0 mapeo-settings-myprojectname 
```

## Configuration Contents

**These are the directories that live in the top level folder**

* fields
* icons
* presets

#### These are the files that live in the top level folder 

* defaults.json
* metadata.json
* package.json
* style.css

## Prepare .json Files

_Time it takes: \(20 min - 20 days. Estimate: 20 min per category\)_

### In `fields` directory customize the `.json` files 

In the fields directory, each .json file needs a `key`, `type`, `label`, and `placeholder.` 

`type` can be one of `select_multiple`, `select_one`, `text`, or `textarea`

### In the presets directory, customize the .json files

In the prests directory, each .json file needs:

* a list of `fields` which should match the `key` created in the fields directory.
* `icon` must mach the name of an icon in the `icons` folder
* `name`will be the human-readable label shown to the user
* `geometery` must be a list of `point` ,`area`, and/or `line`

### Copy icons from previous section

The `icons` folder should have all of the icons you created from the previous section

### Adding an encryption key \(optional\)

In the metadata.json file, you can include a `projectKey` which is a random cryptographic string of characters to prevent unwanted devices from getting access to the data.

To create a projectKey, open node by typing this in the terminal

```text
node
```

You will see

```text
Welcome to Node.js 
Type ".help" for more information.
>
```

Copy the following and paste it in this prompt

```text
crypto.randomBytes(32).toString('hex')
```

You'll see something like this \(but with x replaced with real characters and numbers\)

```text
'380c02d32xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1d'
```

Copy this string and add it to the `metadata.json` file so it looks like this:

```text
{
  "dataset_id": "mapeo-jungle",
  "projectKey": "380c02d32xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1d"
}
```

Notice that there are double quotes `"` around each value.

## Prepare Computer for Packaging the Categories

_Time it takes: \(5-10 min\)_

This is a one time process for every computer. We will need to iinstall nvm, npm, and homebrew. If you've already done this, skip this section.

### Install nvm

```text
touch ~/.bash_profile

curl -o- <https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh> | bash
```

Then close terminal and open again

### Install homebrew \(macOS\)

[http://brew.sh/](http://brew.sh/)

### Install npm

[https://docs.npmjs.com/cli/install](https://docs.npmjs.com/cli/install)

### Install and use node 8

```text
nvm install 8
nvm alias default 8
```

## Package Config Assets for MAPEO

### Prep folder and build

Type, 'cd\`, then a space, then drag and drop the folder where the prepared assets are and press enter. It will look something like this

```text
cd /Users/jen/Documents/Dd_LOCAL_project-files/Dd-Tools/Mapeo/Presets/CREATION\\ LAB/Strathcona-KX-v1.0.0
```

You will then be ready to run scripts directly in the folder. 

```text
$ npm install
```

```text
npm run -s build
```

This -s tells npm to be silent, so that you only see errors that are meaningful to you.



If you succeeded, you'll see the following output and a new folder called `build` with a `.mapeosettings` file inside of it.

```text
$ npm run -s build
→ Using version 2.14.0 of mapeo-settings-builder
! Warning: no category json files found in /home/okdistribute/node_modules/mapeo-default-settings/mapeo-default-settings-2.1.0/categories
✓ Built presets and categories (37ms)
✓ Generated svg sprite for iD (544ms)
✓ Generated png sprite for Mapbox (81ms)
✓ Generated png icons for Mapeo Mobile (607ms)
✓ Successfully created file 'build/mapeo-default-settings-v2.1.0.mapeosettings' (total 1299ms)

```

 You'll also see  a `.mapeosettings` file inside of the `build` directory.

![This is the .mapeosettings file you&apos;ll need in the next section](../.gitbook/assets/screenshot-from-2020-03-18-17-12-16.png)

### What is a .mapeosettings file?

A `.mapeosettings` file is a **tar** file, similar to a zip file. You can see the contents of the file by changing the file extension to `.tar` and using any application that can extract tar files.

### Troubleshooting

If you already have done this and you are recreating presets from scratch, you may want to purge node\_modules and install updated versions of the dependencies

![To update to latest dependencies, delete this folder and reinstall](../.gitbook/assets/screen_shot_2019-05-07_at_11.01.07_am.png)

In Mac or Linux, in the terminal:

```text
rm -rf node_modules
npm install
```

If you're having more issues, please [open an issue on the GitHub repository](https://github.com/digidem/mapeo-default-settings/issues/new) or e-mail our support hotline.

