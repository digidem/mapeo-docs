---
id: configuration
title: Customizing Icons & Forms
sidebar_label: Customizing Icons & Forms
---

This is a guide on how to customize Mapeo Mobile and Desktop for versions
**4.0.0-beta and above**, and the instructions may be different than earlier
versions.

## Creating a Mapeo Settings file

If you want to have a custom configuration for the tags and icons, see the [guide to creating a Mapeo Settings file](https://github.com/digidem/mapeo-settings-builder/blob/master/README.md#table-of-contents).

A `.mapeosettings` file is a **tar** file, similar to a zip file. You can see
the contents of the file by changing the file extention to `.tar` and using any
application that can extract tar files.

*If you would like to help improve this process, contributions are actively welcomed!*


## Customizing Mapeo Desktop

Mapeo Desktop supports importing `.mapeosettings` files in the user interface.

After you've created your settings file, you can import it by navigating to
**File->Import Configuration file...**.

![Import Configuration Mapeo Desktop](../../img/configuration-desktop.png)

You can also extract the `.mapeosettings` file into the
`USERDATA/Mapeo/presets/default` directory, similar to Mapeo Mobile described
below.

* USERDATA is the per-user application data directory, which by default points to:

  * `%APPDATA%` on Windows
  * `$XDG_CONFIG_HOME` or ~/.config on Linux
  * `~/Library/Application Support` on macOS

## Customizing Mapeo Mobile

Mapeo Mobile does not currently support a raw `.mapeosettings` file, and
instead will need an extracted directory.


You need to use a tar extraction program to first untar the file. Then, place
this folder in the appropriate directory on the Android device.

[The instructions for which directory to place your settings folder can be found here on the GitHub
repository](https://github.com/digidem/mapeo-mobile/blob/master/README.md#usage).


