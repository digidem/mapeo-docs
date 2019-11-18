---
id: configuration
title: Customizing Icons & Forms
sidebar_label: Customizing Icons & Forms
---

This is a guide on how to customize Mapeo Mobile and Desktop for versions
**4.0.0-beta and above**, and the instructions may be different than earlier
versions.

## Creating a Mapeo Settings file

If you want to have a custom configuration for the tags and icons, see the
[guide to creating a Mapeo Settings
file](https://github.com/digidem/mapeo-settings-builder/blob/master/README.md#table-of-contents).

A `.mapeosettings` file is a **tar** file, similar to a zip file. You can see
the contents of the file by changing the file extention to `.tar` and using any
application that can extract tar files.

*If you would like to help improve this process, contributions are actively welcomed!*

## Mapeo Mobile

Mapeo Mobile does not currently support a raw `.mapeosettings` file, and
instead will need a manual import process using an extracted directory.

1. Rename `myfile.mapeosettings` to `myfile.tar`

```
$ cp my-presets-v1.0.0.mapeosettings my-presets-v1.0.0.tar
```

2. Use a tar extraction program to untar the file. 

```
$ tar -xvf my-presets-v1.0.0.tar
```

3. Plug in the device to your computer using a USB cable.
4. Set the mode for usb debugging on the phone to 'Transfer Files'.
5. In the terminal, typing `adb devices` should give you the following output:

```
$ adb devices
List of devices attached
ZY223D4VVS	device
```

[If your device is not found or is unauthorized, make sure it is plugged in all
the way and then see this troubleshooting
guide](https://stackoverflow.com/questions/23081263/adb-android-device-unauthorized).

6. Now, you'll need to place this folder in the appropriate directory on the Android device using `adb push`:

```
adb push ./my-presets-v1.0.0/* /sdcard/Android/data/com.mapeo/files/presets/default
```

7. Check that the files are available on the device by using the shell:

```
$ adb shell ls /sdcard/Android/data/com.mapeo/files/presets/default
VERSION
icons
icons.json
icons.png
icons.svg
metadata.json
presets.json
style.css
translations.json
```

## Mapeo Desktop

#### Automated import 

Mapeo Desktop supports importing `.mapeosettings` files in the user interface.

After you've created your settings file, you can import it by navigating to
**File->Import Configuration...**.

![Import Configuration Mapeo Desktop](../../img/configuration-desktop.png)


#### Manual import 

You can also extract the `.mapeosettings` file as a tar file into the following directory:

```
USERDATA/Mapeo/presets/default
```

* USERDATA is the per-user application data directory, which by default points to:

  * `%APPDATA%` on Windows
  * `$XDG_CONFIG_HOME` or ~/.config on Linux
  * `~/Library/Application Support` on macOS

This folder (`default`) expects these files directly in under this default
folder (i.e. no sub-folder with a different name):

```
presets.json
icons.svg
etc...
```

### Help wanted

* document more clearly or link to documentation on how to move folders into an android device
