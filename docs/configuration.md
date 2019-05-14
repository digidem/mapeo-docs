---
id: configuration
title: Customizing Mapeo 
sidebar_level: Customizing Mapeo
---

## Creating a Mapeo Settings file

If you want to have a custom configuration for the tags and icons, see the [guide to creating a Mapeo Settings file](https://github.com/digidem/mapeo-settings-builder/blob/master/README.md#table-of-contents).

**If you would like to help improve this process, contributions are actively welcomed!**

## Customizing Mapeo Desktop

Mapeo Desktop supports importing `.mapeosettings` files in the user interface.

After you've created your settings file, you can import it by navigating to
**File->Import Configuration file...**.

![Import Configuration Mapeo Desktop](../../img/configuration-desktop.png)

## Customizing Mapeo Mobile

Mapeo Mobile does not currently support a raw `.mapeosettings` file, and
instead will need an extracted directory.

A `.mapeosettings` file is a **tar** file,
similar to a zip file. You can see the contents of the file by using any
application that can extract tar files.

You need to use a tar extraction program to first untar the file. Then, place
this folder in the appropriate directory on the Android device.

[The instructions for which directory to place your settings folder can be found here on the GitHub
repository](https://github.com/digidem/mapeo-mobile/blob/master/README.md#usage).


